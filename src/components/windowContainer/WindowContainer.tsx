import { useRef, useState } from "react";
import { useMousePosition } from "../../utils/hooks/MousePosition";
import WindowContainerType from "../../utils/types/WindowContainerType";
import "./WindowContainer.scss";

const WindowContainer = (props: WindowContainerType) => {
  const actionsRef = useRef(null as any);
  const windowRef = useRef(null as any);

  const [windowX, setWindowX] = useState(80);
  const [windowY, setWindowY] = useState(80);
  const [windowXclick, setWindowXclick] = useState(0);
  const [windowYclick, setWindowYclick] = useState(0);
  const mousePosition = useMousePosition();

  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e: any) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    setWindowXclick(x);
    setWindowYclick(y);
    console.log(x, y);
    setDragging(true);
  };
  const handleMouseUp = (e: any) => {
    setWindowX(mousePosition.x - windowXclick);
    setWindowY(mousePosition.y - windowYclick);
    setDragging(false);
  };

  return (
    <div
      className="windowContainer-main"
      ref={windowRef}
      style={{
        left: dragging ? mousePosition.x - windowXclick : windowX,

        top: dragging ? mousePosition.y - windowYclick : windowY,
      }}
    >
      <div
        className="windowContainer-main__actions"
        ref={actionsRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      ></div>
      <div className="windowContainer-main__menu"></div>
      <div className="windowContainer-main__router-outlet">
        {props.children}
      </div>
    </div>
  );
};

export default WindowContainer;
