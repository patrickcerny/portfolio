import { useState } from "react";
import "./App.scss";
import DesktopItem from "./components/desktopItem/DesktopItem";
import Taskbar from "./components/taskbar/Taskbar";
import WindowContainer from "./components/windowContainer/WindowContainer";
import InternetExplorer from "./programs/internetExplorer/InternetExplorer";

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
      <WindowContainer menu={[{ name: "Test" }, { name: "Test" }]}>
        <InternetExplorer />
      </WindowContainer>
    </div>
  );
}

export default App;
