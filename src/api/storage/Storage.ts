import { AppStateType } from "redux/store";
import initState from "./initState";

export default new class Storage {
  private readonly name: string = 'AGARIX:DATA';

  public get(): TStorage {
    return JSON.parse(localStorage.getItem(this.name) as string) as TStorage || initState;
  }

  public save(state: AppStateType) {
    const { profiles, game, settings } = state;

    const storage: string = JSON.stringify({
      profiles, 
      game,
      settings
    } as TStorage);

    localStorage.setItem(this.name, storage);
  }
}

export type TStorage = Omit<AppStateType, 'UI'>;