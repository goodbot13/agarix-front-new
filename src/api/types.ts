declare global {
  interface Window {
    setCurrentGameVersion: (version: string) => void,
    setGameLoaderShown: (shown: boolean) => void,
  }
}

export {};