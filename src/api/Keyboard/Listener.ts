export const transformCode = (
  code: string,
  ctrlKey: boolean,
  altKey: boolean,
  shiftKey: boolean,
): string => {
  const ctrl = ctrlKey ? 'CTRL+' : '';
  const alt = altKey ? 'ALT+' : '';
  const shift = shiftKey ? 'SHIFT+' : '';

  const withShift = code.includes('Shift') && shiftKey;
  const withAlt = code.includes('Alt') && altKey;
  const withCtrl = code.includes('Control') && ctrlKey;

  if (withShift || withAlt || withCtrl) {
    return code.replace('Key', '');
  }

  return ctrl + alt + shift + code.replace('Key', '');
};

export default class KeyboardEvents {
  private onKeyDownSubscribers = [] as Array<TSubscriber>;
  private onKeyUpSubscribers = [] as Array<TSubscriber>;
  private onKeyPressSubscribers = [] as Array<TSubscriber>;

  public subscribeOnKeyDown(func: TSubscriber) {
    this.onKeyDownSubscribers.push(func);

    window.addEventListener('keydown', (e) => {
      const { code, ctrlKey, altKey, shiftKey, preventDefault } = e;

      this.onKeyDownSubscribers.forEach((subscriber) => {
        subscriber(transformCode(code, ctrlKey, altKey, shiftKey), preventDefault.bind(e));
      });
    });
  }

  public subscribeOnkeyUp(func: TSubscriber) {
    this.onKeyUpSubscribers.push(func);

    window.addEventListener('keyup', (e) => {
      const { code, ctrlKey, altKey, shiftKey, preventDefault } = e;

      this.onKeyUpSubscribers.forEach((subscriber) => {
        subscriber(transformCode(code, ctrlKey, altKey, shiftKey), preventDefault.bind(e));
      });
    });
  }

  public subscribeOnKeyPress(func: TSubscriber) {
    this.onKeyPressSubscribers.push(func);

    window.addEventListener('keypress', (e) => {
      this.onKeyPressSubscribers.forEach((subscriber) => {
        const { code, ctrlKey, altKey, shiftKey, preventDefault } = e;

        subscriber(transformCode(code, ctrlKey, altKey, shiftKey), preventDefault.bind(e));
      });
    });
  }
}

export type TSubscriber = (key: string, preventDefault: () => void) => void;
