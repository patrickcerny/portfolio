import { useRef, useState } from "react";
import { useMousePosition } from "../../utils/hooks/MousePosition";
import WindowContainerType from "../../utils/types/WindowContainerType";
import "./WindowContainer.scss";

const WindowContainer = (props: WindowContainerType) => {
  const actionsRef = useRef(null as any);
  const windowRef = useRef(null as any);

  const [windowX, setWindowX] = useState(Math.floor(Math.random() * 100));
  const [windowY, setWindowY] = useState(Math.floor(Math.random() * 100));
  const [windowXclick, setWindowXclick] = useState(0);
  const [windowYclick, setWindowYclick] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [oldPosition, setOldPosition] = useState({ x: windowX, y: windowY });
  const mousePosition = useMousePosition();

  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e: any) => {
    if (e.target.classList.contains("actionButton")) return;
    console.log("mouse down");
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    setWindowXclick(x);
    setWindowYclick(y);
    console.log(x, y);
    setDragging(true);
  };
  const handleMouseUp = (e: any) => {
    if (e.target.classList.contains("actionButton")) return;
    setOldPosition({
      x: mousePosition.x - windowXclick - 1,
      y: mousePosition.y - windowYclick - 1,
    });
    setWindowX(mousePosition.x - windowXclick - 1);
    setWindowY(mousePosition.y - windowYclick - 1);

    setDragging(false);
  };

  const handleMinimize = () => {};
  const handleToggleSize = (e: any) => {
    console.log(fullscreen);

    if (fullscreen) {
      setWindowX(oldPosition.x);
      setWindowY(oldPosition.y);
      setFullscreen(false);
    }

    setFullscreen(!fullscreen);
  };
  const handleClose = () => {};
  return (
    <div
      className="windowContainer-main"
      ref={windowRef}
      style={
        fullscreen
          ? {
              left: 0,
              top: 0,
              width: "calc(100vw - 2px)",
              height: "calc(100vh - 32px)",
            }
          : {
              left: dragging ? mousePosition.x - windowXclick : windowX,
              top: dragging ? mousePosition.y - windowYclick : windowY,
            }
      }
    >
      <div
        className="windowContainer-main__actions"
        ref={actionsRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div className="windowContainer-main__actions__container">
          <button
            className="windowContainer-main__actions__container__minimize actionButton"
            onClick={handleMinimize}
          ></button>
          <button
            className="windowContainer-main__actions__container__toggleSize actionButton"
            onClick={handleToggleSize}
          ></button>
          <button
            className="windowContainer-main__actions__container__close actionButton"
            onClick={handleClose}
          ></button>
        </div>
      </div>
      <div className="windowContainer-main__menu"></div>
      <div className="windowContainer-main__router-outlet">
        {props.children}
      </div>
    </div>
  );
};

export default WindowContainer;
