import "./DesktopItem.scss";
import DesktopItemType from "../../utils/types/DesktopItemType";
import { useRef, useState } from "react";
const DesktopItem = (props: DesktopItemType) => {
  const [clicked, setClicked] = useState(false);

  const ref = useRef(null as any);
  const handleSingleClick = () => {
    setClicked(true);
  };

  const handleDoubleClick = () => {};

  const checkIfClickedOutside = (e: any) => {
    if (clicked && ref.current && !ref.current.contains(e.target)) {
      setClicked(false);
    }
  };

  document.addEventListener("mousedown", checkIfClickedOutside, {
    capture: true,
  });

  return (
    <div
      ref={ref}
      className={`desktopItem-main ${clicked ? "mainProgramClicked" : ""}`}
      onClick={handleSingleClick}
      onDoubleClick={handleDoubleClick}
    >
      <img src={props.image} alt={props.name} />
      <span>{props.name}</span>
    </div>
  );
};

export default DesktopItem;
