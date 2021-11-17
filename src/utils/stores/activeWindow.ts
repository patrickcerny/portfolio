import { makeObservable, observable, computed, action, flow } from "mobx";
import React from "react";

class WindowStore {
  windows: React.RefObject<any>[] = [];

  constructor() {
    makeObservable(this, { windows: observable });
  }
}
export default WindowStore;
