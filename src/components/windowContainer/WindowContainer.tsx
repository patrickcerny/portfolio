import { observer } from 'mobx-react';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useMousePosition } from '../../utils/hooks/MousePosition';
import { windowStore } from '../../utils/stores/windowStore';
import { zIndexStore } from '../../utils/stores/zIndexStore';
import WindowContainerType from '../../utils/types/WindowContainerType';
import './WindowContainer.scss';

const WindowContainer = observer((props: WindowContainerType) => {
  const actionsRef = useRef(null as any);
  const windowRef = useRef(null as any);
  const [windowX, setWindowX] = useState(Math.floor(Math.random() * 100));
  const [windowY, setWindowY] = useState(Math.floor(Math.random() * 100));
  const [windowXclick, setWindowXclick] = useState(0);
  const [windowYclick, setWindowYclick] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [oldPosition, setOldPosition] = useState({ x: windowX, y: windowY });
  const [size, setSize] = useState({ width: 720, height: 480 });
  const [oldSize, setOldSize] = useState({
    width: size.width,
    height: size.height,
  });
  const [dragging, setDragging] = useState(false);
  const mousePosition = useMousePosition();

  const handleMouseDown = (e: any) => {
    if (e.target.classList.contains('actionButton')) return;
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    setWindowXclick(x);
    setWindowYclick(y);
    setDragging(true);
  };
  const handleMouseUp = (e: any) => {
    if (e.target.classList.contains('actionButton')) return;
    setOldPosition({
      x: mousePosition.x - windowXclick - 1,
      y: mousePosition.y - windowYclick - 1,
    });
    setWindowX(mousePosition.x - windowXclick - 1);
    setWindowY(mousePosition.y - windowYclick - 1);

    setDragging(false);
  };

  const handleMinimize = () => windowStore.minimizedClicked(props.type);

  const handleToggleSize = (e: any) => {
    if (fullscreen) {
      setWindowX(oldPosition.x);
      setWindowY(oldPosition.y);
      setSize({ width: oldSize.width, height: oldSize.height });

      setFullscreen(false);
    } else {
      setOldSize({
        width: windowRef.current.offsetWidth,
        height: windowRef.current.offsetHeight,
      });
    }

    setFullscreen(!fullscreen);
  };
  const handleClose = () => {
    windowStore.removeWindow(props.type);
  };

  const handleWindowClick = () => {
    windowRef.current.style.zIndex = zIndexStore.zIndex + 1;
    zIndexStore.incrementZIndex();
    windowRef.current.focus();
  };

  useEffect(() => {
    return () => {};
  }, [props.type]);

  return (
    <div
      onMouseDown={handleWindowClick}
      className='windowContainer-main'
      ref={windowRef}
      style={
        !windowStore.isWindowShown(props.type)
          ? { display: 'none' }
          : fullscreen
          ? {
              left: 0,
              top: 0,
              width: 'calc(100vw - 2px)',
              height: 'calc(100vh - 32px)',
            }
          : {
              left: dragging ? mousePosition.x - windowXclick : windowX,
              top: dragging ? mousePosition.y - windowYclick : windowY,
              width: size.width,
              height: size.height,
            }
      }
    >
      <div
        className='windowContainer-main__actions'
        ref={actionsRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div className='windowContainer-main__actions__container'>
          <button
            className='windowContainer-main__actions__container__minimize actionButton'
            onClick={handleMinimize}
          ></button>
          <button
            className='windowContainer-main__actions__container__toggleSize actionButton'
            onClick={handleToggleSize}
          ></button>
          <button
            className='windowContainer-main__actions__container__close actionButton'
            onClick={handleClose}
          ></button>
        </div>
      </div>
      <div className='windowContainer-main__menu'></div>
      <div className='windowContainer-main__router-outlet'>
        {props.children}
      </div>
    </div>
  );
});

export default WindowContainer;
