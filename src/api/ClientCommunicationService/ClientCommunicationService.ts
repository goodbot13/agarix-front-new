export default class ClientCommunicationService {
  static setSceneBlurred({ blurred, canMouseZoom }: TSceneBlurred) {
    window.GameAPI?.setSceneBlurred(blurred, canMouseZoom);
  }

  static play(): Promise<string> {
    return window.GameAPI?.play();
  }
  
  static join(token?: string): Promise<string> {
    return window.GameAPI?.join(token);
  }

  static create(): Promise<string> {
    return window.GameAPI?.join();
  }

  static setMode(mode: TGameMode) {
    window.GameAPI?.setMode(mode);
  }

  static setRegion(index: number) {
    window.GameAPI?.setRegion(index);
  }

  static setTag(tag: string) {
    window.GameAPI?.setTag(tag);
  }
}

declare global {
  interface Window {
    GameAPI: {
      play(): Promise<string>,
      join(token?: string): Promise<string>,
      setMode(mode: TGameMode): void,
      setRegion(index: number): void,
      setSceneBlurred(blurred: boolean, zoom: boolean): void,
      setTag(tag: string): void
    }
  }
}

export type TGameMode = ':party' | ':ffa' | ':battleroyale' | ':teams' | ':experimental';
type TSceneBlurred = {
  blurred: boolean,
  canMouseZoom: boolean
}