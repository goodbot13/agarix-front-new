import { stopMacroFeed } from "api/GameEvents";
import { gameActions, IHotkeysMouse, TGameActionName } from "redux/settings/hotkeys/mouse/types";

const LEFT_BUTTON = 0;
const MIDDLE_BUTTON = 1;
const RIGHT_BUTTON = 2;

export default new class Mouse {
  private leftActionName: TGameActionName = '[NOT SET]';
  private rightActionName: TGameActionName = '[NOT SET]';
  private middleMouseActionName: TGameActionName = '[NOT SET]';
  private isMacroFeeding: boolean = false;

  public block: boolean = true;

  constructor() {
    window.addEventListener('mousedown', (e) => this.listenMouseDown(e));
    window.addEventListener('mouseup', (e) => this.listenMouseUp(e));
    window.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  private getFunctionToExecute(name: TGameActionName): () => void {
    if (name === '[NOT SET]' || this.block) {
      return () => {};
    }

    for (const action of gameActions) {
      if (action.name === name) {
        if (action.name === 'Macro feed') {
          this.isMacroFeeding = true;
        }

        return action.action;
      }
    }

    return () => {};
  }

  private executeLeft(e: MouseEvent): void {
    e.preventDefault();
    const functionToExecute = this.getFunctionToExecute(this.leftActionName);
    functionToExecute();
  }

  private executeRight(e: MouseEvent): void {
    e.preventDefault();
    const functionToExecute = this.getFunctionToExecute(this.rightActionName);
    functionToExecute();
  }

  private executeMiddle(e: MouseEvent): void {
    e.preventDefault();
    const functionToExecute = this.getFunctionToExecute(this.middleMouseActionName);
    functionToExecute();
  }

  private listenMouseDown(e: MouseEvent): void {
    switch (e.button) {
      case LEFT_BUTTON:
        this.executeLeft(e);
        break;

      case RIGHT_BUTTON:
        this.executeRight(e);
        break;

      case MIDDLE_BUTTON:
        this.executeMiddle(e);
        break;
    }
  }

  private listenMouseUp(e: MouseEvent): void {
    if (this.isMacroFeeding) {
      stopMacroFeed();
      this.isMacroFeeding = false;
    }
  }

  public init({ left, right, middle }: IHotkeysMouse): void {
    this.bindLeft(left);
    this.bindRight(right);
    this.bindMiddle(middle);
  }

  public bindLeft(actionName: TGameActionName): void {
    this.leftActionName = actionName;
  }

  public bindRight(actionName: TGameActionName): void {
    this.rightActionName = actionName;
  }

  public bindMiddle(actionName: TGameActionName): void {
    this.middleMouseActionName = actionName;
  }
}