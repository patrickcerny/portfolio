import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';

import './App.scss';
import DesktopItem from './components/desktopItem/DesktopItem';
import Taskbar from './components/taskbar/Taskbar';
import WindowContainer from './components/windowContainer/WindowContainer';

import mainPrograms from './utils/data/mainPrograms';
import findProgramByType from './utils/functions/findProgramByType';
import { windowStore } from './utils/stores/windowStore';

const App = inject(windowStore.storeKey)(
  observer(() => {
    return (
      <div className="main">
        <Taskbar />
        <div className="main__program-container">
          {mainPrograms.map((mainProgram, key) => {
            return (
              <DesktopItem
                key={key}
                type={mainProgram.type}
                image={mainProgram.image}
              ></DesktopItem>
            );
          })}
        </div>
        {windowStore.activeWindows.map((item) => {
          return (
            <WindowContainer menu={[]} type={item.type}>
              {findProgramByType(item.type).component}
            </WindowContainer>
          );
        })}
      </div>
    );
  })
);

export default App;
