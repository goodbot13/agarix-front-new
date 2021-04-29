export default new (class FrametimeCalculator {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private isStopped: boolean = true;
  private buffer: Array<number> = [];
  private bufferSize: number = 40;
  private lineWidth: number = 2;

  public set(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.isStopped = false;

    this.bufferSize = canvas.width / 2;
  }

  private normalizeX(x: number): number {
    return x * this.lineWidth;
  }

  public stop(): void {
    this.isStopped = true;
  }

  public updateElapsed(ms: number): void {
    if (this.isStopped) {
      return;
    }

    if (this.buffer.length < this.bufferSize) {
      this.buffer.push(ms);
    } else {
      this.buffer.shift();
      this.buffer.push(ms);
    }

    const canvas = this.canvas as HTMLCanvasElement;
    const ctx = this.ctx as CanvasRenderingContext2D;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = this.lineWidth;
    ctx.shadowBlur = 3;
    ctx.lineCap = 'square';

    for (let i = 0; i < this.buffer.length; i++) {
      const time = this.buffer[i];
      const x = this.normalizeX(i);

      if (time <= 20) {
        ctx.strokeStyle = 'rgba(255, 255, 255, .8)';
        ctx.shadowColor = 'rgba(255, 255, 255, .8)';
        ctx.fillStyle = 'rgba(255, 255, 255, .8)';
      } else if (time > 20 && time < 23) {
        ctx.strokeStyle = 'rgba(180, 180, 180, .8)';
        ctx.shadowColor = 'rgba(180, 180, 180, .8)';
        ctx.fillStyle = 'rgba(180, 180, 180, .8)';
      } else if (time >= 23) {
        ctx.strokeStyle = 'rgba(250, 128, 114, .8)';
        ctx.shadowColor = 'rgba(250, 128, 114, .8)';
        ctx.fillStyle = 'rgba(250, 128, 114, .8)';
      }

      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
  }
})();
