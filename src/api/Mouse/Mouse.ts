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
    
    if (location.origin.includes('agar')) {
      window.addEventListener('contextmenu', (e) => e.preventDefault());
    }
  }

  private getFunctionToExecute(name: TGameActionName): () => void {
    if (name === '[NOT SET]') {
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

  private execute(e: MouseEvent, action: TGameActionName): void {
    e.preventDefault();
    const functionToExecute = this.getFunctionToExecute(action);
    functionToExecute();
  }

  private listenMouseDown(e: MouseEvent): void {
    if (this.block) {
      return;
    }

    switch (e.button) {
      case LEFT_BUTTON:
        this.execute(e, this.leftActionName);
        break;

      case RIGHT_BUTTON:
        this.execute(e, this.rightActionName);
        break;

      case MIDDLE_BUTTON:
        this.execute(e, this.middleMouseActionName);
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