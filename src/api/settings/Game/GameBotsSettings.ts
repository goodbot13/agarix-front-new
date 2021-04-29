import { BotsProviderType } from 'redux/settings/game/bots/types';

export default class GameCellsSettings {
  static setBotsEnabled(value: boolean) {
    window.GameSettings.all.settings.game.bots.enabled = value;
  }


  static setBotsProvider(provider: BotsProviderType) {
    window.GameSettings.all.settings.game.bots.provider = provider;
  }
}
