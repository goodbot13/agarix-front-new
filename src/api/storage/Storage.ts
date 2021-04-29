import { AppStateType } from 'redux/store';
import initState from './initState';

export default new (class Storage {
  private readonly name: string = 'AGARIX:DATA';

  private swap(str: string): string {
    const left = str.slice(0, str.length / 2);
    const right = str.slice(str.length / 2);

    return right + left;
  }

  public get(): TStorage {
    const storage = localStorage.getItem(this.name) as string;

    if (storage) {
      try {
        const swapped = this.swap(storage);

        // will throw exception if it has invalid format
        const decoded = JSON.parse(atob(swapped)) as AppStateType;

        return decoded;
      } catch {
        // decoding failed, valid format
        return JSON.parse(storage);
      }
    }

    return initState;
  }

  public save(state: AppStateType) {
    const { profiles, game, settings } = state;

    const newState = JSON.stringify({ profiles, game, settings });

    localStorage.setItem(this.name, newState);
  }

  public reset() {
    localStorage.removeItem(this.name);
  }

  public init(state: AppStateType) {
    if (!localStorage.getItem(this.name)) {
      console.log('Front-end: first launch');

      this.save(state);
      return;
    }
  }
})();

export type TStorage = Omit<AppStateType, 'UI'>;
