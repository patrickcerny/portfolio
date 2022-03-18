import { makeObservable, observable, action } from 'mobx';

class ZIndexStore {
  zIndex: number = 0;

  constructor() {
    makeObservable(this, { zIndex: observable, incrementZIndex: action });
  }

  incrementZIndex() {
    this.zIndex += 1;
  }
}
export const zIndexStore = new ZIndexStore();
