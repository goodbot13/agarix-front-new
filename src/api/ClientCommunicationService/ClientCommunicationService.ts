export default class ClientCommunicationService {
  static setSceneBlured({ blured, canMouseZoom }: TSceneBlured) {
    console.log(blured, canMouseZoom);
  }
}

export type TSceneBlured = {
  blured: boolean,
  canMouseZoom: boolean
}