import { TLoginType } from "redux/profiles/types";

export default class ProfilesSettings {
  static setLeftProfileNick(nick: string) {
    window.GameSettings.all.profiles.leftProfileNick = nick;
    window.GameAPI?.setFirstTabNick();
  }

  static setLeftProfileSkinUrl(skinUrl: string) {
    window.GameSettings.all.profiles.leftProfileSkinUrl = skinUrl;
    window.GameAPI?.setFirstTabSkin();
  }

  static setLeftProfile(nick: string, skinUrl: string, tag: string) {
    window.GameSettings.all.profiles.leftProfileNick = nick;
    window.GameSettings.all.profiles.leftProfileSkinUrl = skinUrl;
    window.GameSettings.all.profiles.tag = tag;

    window.GameAPI?.setFirstTabNick();
    window.GameAPI?.setFirstTabSkin();
    window.GameAPI?.setTag();
  }

  static setRightProfileNick(nick: string) {
    window.GameSettings.all.profiles.rightProfileNick = nick;
    window.GameAPI?.setSecondTabNick();
  }

  static setRightProfileSkinUrl(skinUrl: string) {
    window.GameSettings.all.profiles.rightProfileSkinUrl = skinUrl;
    window.GameAPI?.setSecondTabSkin();
  }

  static setRightProfile(nick: string, skinUrl: string) {
    window.GameSettings.all.profiles.rightProfileNick = nick;
    window.GameSettings.all.profiles.rightProfileSkinUrl = skinUrl;

    window.GameAPI?.setSecondTabNick();
    window.GameAPI?.setSecondTabSkin();
  }

  static setTag(tag: string) {
    window.GameSettings.all.profiles.tag = tag;
    window.GameAPI?.setTag();
  }

  static setLeftProfileLoginType(loginType: TLoginType) {
    window.GameSettings.all.profiles.leftProfileLoginType = loginType;
  }

  static setRightProfileLoginType(loginType: TLoginType) {
    window.GameSettings.all.profiles.rightProfileLoginType = loginType;
  }
}