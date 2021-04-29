import { TStore } from 'redux/store';

export default new (class StoreLink {
  // @ts-ignore
  public store: TStore;

  set(store: TStore) {
    this.store = store;
  }
})();
