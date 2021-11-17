import { useState } from "react";
import TaskbarItemType from "../../../utils/types/TaskbarItemType";
import "./TaskbarItem.scss";

const TaskbarItem = (props: TaskbarItemType) => {
  const [focused, setFocused] = useState(false);

  const handleClick = () => {
    setFocused(!focused);
  };
  return (
    <div
      className={`taskbarItem-main ${focused ? "taskbarItemFocused" : ""}`}
      onClick={handleClick}
    >
      <img src={props.icon} alt={props.name} />
      <span>{props.name}</span>
    </div>
  );
};

export default TaskbarItem;
