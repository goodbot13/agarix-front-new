import { BotsProviderType } from 'redux/settings/game/bots/types';

export default class GameCellsSettings {
  static setBotsEnabled(enabled: boolean) {
    window.GameSettings.all.settings.game.bots.enabled = enabled;
  }

  static setBotsProvider(provider: BotsProviderType) {
    window.GameSettings.all.settings.game.bots.provider = provider;
  }

  static setBotsStarted(started: boolean) {
    window.GameSettings.all.settings.game.bots.enabled = started;
  }
}
