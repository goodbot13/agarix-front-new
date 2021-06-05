declare global {
  interface Window {
    GameAPI: {
      setSceneBlurred(blurred: boolean, zoom?: boolean): void,
      join(token?: string, serverToken?: boolean): Promise<string>,
      play(): Promise<string>,
      setMultiboxEnabled(enabled: boolean): void,
      setTopOneView(enabled: boolean, reset?: boolean): void,
      setFullMapView(enabled: boolean): void,
      fullMapViewAbort(): void,
      spectateFree(): void,
      spectateTarget(): void,
      spectateCenter(): void,
      spectateTopOne(): void,

      sendMessage(message: string): void,
      sendCommand(message: string): void,

      setSecondTabSkin(): void,
      setSecondTabNick(): void,
      setFirstTabSkin(): void,
      setFirstTabNick(): void,
      setTag(): void,
      disconnectOgar(): void,
      connectOgar(): Promise<boolean>,
      setRegion(index: number): void,
      setMode(mode: TGameMode): void,
      logInWithFb(): void,
      logOutWithFb(): void,
      logInWithGoogle(): void,
      logOutWithGoogle(): void,

      reconnectFirstTab(): void,
      reconnectSecondTab(): void,
      reconnectSpectator(): void,

      init(): void,
      
      hotkeys: IGameAPIHotkeys
    }
  }
}

export interface IGameAPIHotkeys {
  sendCommand(text: string): void,
  toggleFullmapViewRender(): void,
  switchTabs(): void,
  toggleCellRings(): void,
  toggleMyCellStats(): void,
  toggleCellSkins(): void,
  toggleCellHelpers(): void,
  pauseCell(): void,
  quickRespawn(): Promise<any>,
  split16(): void,
  tripleSplit(): void,
  doubleSplit(): void,
  split(): void,
  stopFeed(): void,
  macroFeed(): void,
  feed(): void,
}

export type TGameMode = ':party' | ':ffa' | ':battleroyale' | ':teams' | ':experimental';