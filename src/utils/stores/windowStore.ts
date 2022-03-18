import { WindowStoreType } from '../types/WindowStoreType';
import { makeAutoObservable } from 'mobx';
import ProgramsEnum from '../enums/programsEnum';

class WindowStore {
  storeKey: string = 'windowStore' as const;

  activeWindows: WindowStoreType[] = [];
  isWindowShown(program: ProgramsEnum) {
    const index = this.activeWindows.findIndex(
      (window) => window.type === program
    );

    return this.activeWindows[index].shown;
  }
  constructor() {
    makeAutoObservable(this);
  }

  addWindow(program: ProgramsEnum) {
    if (this.activeWindows.filter((obj) => obj.type === program).length !== 0) {
      const index = this.activeWindows.findIndex(
        (window) => window.type === program
      );
      this.activeWindows[index].shown = true;
      return;
    }
    this.activeWindows.push({ type: program, active: true, shown: true });
  }

  removeWindow = (program: ProgramsEnum) => {
    const index = this.activeWindows.findIndex(
      (window) => window.type === program
    );

    this.activeWindows.splice(index, 1);
  };

  minimizedClicked(program: ProgramsEnum) {
    const index = this.activeWindows.findIndex(
      (window) => window.type === program
    );

    this.activeWindows[index].shown = !this.activeWindows[index].shown;
  }

  taskbarClicked(program: ProgramsEnum) {
    const index = this.activeWindows.findIndex(
      (window) => window.type === program
    );

    this.activeWindows[index].shown = !this.activeWindows[index].shown;
  }
}
export const windowStore = new WindowStore();
