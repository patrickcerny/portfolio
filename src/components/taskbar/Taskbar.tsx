import { useEffect, useState } from "react";
import "./Taskbar.scss";
import TaskbarItem from "./taskbarItem/TaskbarItem";
import Dog from "../../assets/img/dog.jpg";
import LogOFf from "../../assets/img/logOff.png";
import TurnOFf from "../../assets/img/turnOff.png";
import WindowStore from "../../utils/stores/activeWindow";

const Taskbar = () => {
  const [time, setTime] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const [windowsStore] = useState(() => new WindowStore());
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
        style={{ display: menuVisible ? "flex" : "none" }}
      >
        <div className="windowsMenu-main__top-container">
          <img src={Dog} alt="Windows User dog" />
          <span>Patrick Cerny</span>
        </div>
        <hr className="windowsMenu-main__hr-orange" />
        <div className="windowsMenu-main__middle-container">
          <div className="windowsMenu-main__middle-container__left"></div>
          <div className="windowsMenu-main__middle-container__right"></div>
        </div>
        <div className="windowsMenu-main__bottom-container">
          <div className="windowsMenu-main__bottom-container__item">
            <img src={LogOFf} alt="Log off Icon" />
            <span>Log Off</span>
          </div>
          <div
            className="windowsMenu-main__bottom-container__item"
            id="turnOff"
          >
            <img src={TurnOFf} alt="Turn off Icon" />
            <span>Turn Off Computer</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Taskbar;
