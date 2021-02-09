import KeyboardEvents from "./Listener";

class Keyboard {
  private events: KeyboardEvents;
  private binded: Map<string, () => void>;

  constructor() {
    this.binded = new Map();

    this.events = new KeyboardEvents();
    this.events.subscribeOnKeyDown((k, p) => this.keyDownSubscriber(k, p));
    this.events.subscribeOnkeyUp((k, p) => this.keyUpSubscriber(k, p));
    this.events.subscribeOnKeyPress((k, p) => this.keyPressSubscriber(k, p));
  }

  private transformKey(key: string, event: TKeyBindEvent): string {
    return `${event}:${key}`;
  }

  private untransformKey(key: string): TUntransformedKey {
    return {
      event: key.split(':')[0] as TKeyBindEvent,
      key: key.split(':')[1]
    };
  }

  private isValidUntransformedKey(keyToUntransform: string, e: TKeyBindEvent, keyboardKey: string, functionToExecute: any): boolean {
    const { event, key } = this.untransformKey(keyToUntransform);
    return event === e && keyboardKey === key && typeof functionToExecute === 'function'; 
  }

  private handleEvent(keyboardKey: string, preventDefault: () => void, event: TKeyBindEvent) {
    this.binded.forEach((funcToExecute, keyToUntransform) => {
      if (this.isValidUntransformedKey(keyToUntransform, event, keyboardKey, funcToExecute)) {
        funcToExecute();
        preventDefault();
      }
    });
  }

  private keyDownSubscriber(keyboardKey: string, preventDefault: () => void) {
    this.handleEvent(keyboardKey, preventDefault, 'down');
  }

  private keyUpSubscriber(keyboardKey: string, preventDefault: () => void) {
    this.handleEvent(keyboardKey, preventDefault, 'up');
  }

  private keyPressSubscriber(keyboardKey: string, preventDefault: () => void) {
    this.handleEvent(keyboardKey, preventDefault, 'press');
  }

  public bindFunctionToKey(event: TKeyBindEvent, key: string, func: () => void) {
    const transformedKey = this.transformKey(key, event);

    if (this.binded.has(transformedKey)) {
      this.binded.delete(transformedKey);
    }

    this.binded.set(transformedKey, func);
  }

  public hasBinded(event: TKeyBindEvent, key: string): boolean {
    return this.binded.has(this.transformKey(key, event));
  }

  public removeBinded(event: TKeyBindEvent, key: string) {
    this.binded.delete(this.transformKey(key, event));
  }
}

export default new Keyboard;

export type TKeyBindEvent = 'down' | 'up' | 'press';
export type TUntransformedKey = {
  event: TKeyBindEvent,
  key: string
}