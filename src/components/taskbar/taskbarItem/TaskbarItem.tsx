import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { windowStore } from '../../../utils/stores/windowStore';
import TaskbarItemType from '../../../utils/types/TaskbarItemType';
import './TaskbarItem.scss';

const TaskbarItem = observer((props: TaskbarItemType) => {
  const [focused, setFocused] = useState(false);

  const handleClick = () => {
    if (!focused) windowStore.taskbarClicked(props.type);
    else windowStore.taskbarClicked(props.type);
    setFocused(!focused);
  };
  useEffect(() => {
    return () => {};
  }, [focused, props.type]);
  return (
    <div
      className={`taskbarItem-main ${focused ? 'taskbarItemFocused' : ''}`}
      onClick={handleClick}
    >
      <img src={props.icon} alt={props.type} />
      <span>{props.type}</span>
    </div>
  );
});

export default TaskbarItem;
