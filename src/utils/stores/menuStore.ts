import { makeObservable, observable, action } from "mobx";

class MenuStore {
  menu: boolean = false;

  constructor() {
    makeObservable(this, { menu: observable, closeMenu: action });
  }

  openMenu() {
    this.menu = true;
  }
  closeMenu() {
    this.menu = false;
  }
}
export default MenuStore;
