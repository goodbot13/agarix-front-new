import FrametimeCalculator from "api/FrametimeCalculator/FrametimeCalculator";
import React, { FC, useEffect, useRef } from "react";

const Frametime: FC = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    FrametimeCalculator.set(ref.current as HTMLCanvasElement);
    (window as any).fc = FrametimeCalculator;
    return () => FrametimeCalculator.stop();
  }, []);

  return (
    <div style={{
      paddingLeft: '-2px',
      paddingRight: '-2px',
      borderRadius: '4px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      marginTop: -1,
      height: 14
    }}>
      <canvas
        width={200}
        height={16} 
        ref={ref}
        style={{ verticalAlign: 'middle' }}
      ></canvas>
    </div>
  )
}

export default Frametime;