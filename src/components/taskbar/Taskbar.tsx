import { useEffect, useState } from "react";
import "./Taskbar.scss";
import TaskbarItem from "./taskbarItem/TaskbarItem";

const Taskbar = () => {
  const [time, setTime] = useState("");
  const [menuVisible, setMenuVisible] = useState(true);

  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    setTime(h + ":" + m);
    setTimeout(startTime, 1000);
  }

  function checkTime(i: any) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  useEffect(() => {
    startTime();
    return () => {};
  });
  return (
    <>
      <div className="taskbar-main">
        <div
          className="taskbar-main__start clickable"
          onClick={() => setMenuVisible(!menuVisible)}
        ></div>
        <div className="taskbar-main__applications">
          <TaskbarItem
            name="Testing"
            icon="https://findicons.com/files/icons/2075/windows_system_logo/256/windows_xp.png"
          />
          <TaskbarItem
            name="Testing"
            icon="https://findicons.com/files/icons/2075/windows_system_logo/256/windows_xp.png"
          />
        </div>
        <div className="taskbar-main__end">
          <div className="taskbar-main__end__time">{time}</div>
        </div>
      </div>
      <div
        className="windowsMenu-main"
        style={{ display: menuVisible ? "block" : "none" }}
      >
        <div className="windowsMenu-main__top-container"></div>
      </div>
    </>
  );
};

export default Taskbar;
