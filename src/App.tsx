import { useState } from "react";
import "./App.scss";
import DesktopItem from "./components/desktopItem/DesktopItem";
import Taskbar from "./components/taskbar/Taskbar";
import WindowStore from "./utils/stores/activeWindow";

import mainPrograms from "./utils/data/mainPrograms";

function App() {
  return (
    <div className="main">
      <Taskbar />
      <div className="main__program-container">
        {mainPrograms.map((mainProgram) => {
          return (
            <DesktopItem
              name={mainProgram.name}
              image={mainProgram.image}
            ></DesktopItem>
          );
        })}
      </div>
    </div>
  );
}

export default App;
