import { AppStateType, TStore } from "redux/store";
import initState from "./initState";

export default new class Storage {
  private readonly name: string = 'AGARIX:DATA';
  private readonly backupName: string = 'AGARIX:DATA:BACKUP';
  private cache: string = "";

  private swap(str: string): string {
    const left = str.slice(0, str.length / 2);
    const right = str.slice(str.length / 2);

    return right + left;
  }

  public get(): TStorage {
    const storage = localStorage.getItem(this.name) as string;
 
    if (storage) {
      return JSON.parse(atob(this.swap(storage)));
    }

    return initState;
  }

  public save(state: AppStateType) {
    const { profiles, game, settings } = state;

    this.cache = btoa(JSON.stringify({
      profiles, 
      game,
      settings
    } as TStorage));

    this.cache = this.swap(this.cache);

    localStorage.setItem(this.name, this.cache);
  }

  public reset() {
    localStorage.setItem(this.backupName, this.cache);
    localStorage.removeItem(this.name);
  }

  public init(state: AppStateType) {
    if (!localStorage.getItem(this.name)) {
      this.save(state);
      return;
    }

    /* // recursive check for added (new) items in initState compared to saved (old) state
    let saved = this.get(); */
  }
}

export type TStorage = Omit<AppStateType, 'UI'>;