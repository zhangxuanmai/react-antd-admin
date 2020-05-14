import React, { useState, useEffect } from "react";
import { FullscreenExitOutlined, ExpandOutlined } from '@ant-design/icons'
import { isSupportFull, fullScreen, fullExit } from "../../utils/fullScreen";

function FullScree() {
  const [status, setStatus] = useState(false)

  useEffect(() => {
    // window.addEventListener('resize', isFullScreen)
    // return () => window.removeEventListener('resize', isFullScreen)
  })

  const isFullScreen = () => {
    // 判断网页的高度或者宽度是否等于屏幕对应大小
    let isFull = document.body.scrollHeight === window.screen.height || document.body.scrollWidth === window.screen.width;
    if (isFull) {
      console.log('进入全屏');
      setStatus(true);
    } else {
      console.log('退出全屏');
      setStatus(false);
    }
  };

  const onFull = () => {
    if (!isSupportFull()) return;
    fullScreen();
    setStatus(true);
  };

  const onExit = () => {
    if (!isSupportFull()) return;
    fullExit();
    setStatus(false);
  };

  return (
    <div>
      {
        status
          ? <FullscreenExitOutlined onClick={onExit} />
          : <ExpandOutlined onClick={onFull} />
      }
    </div>
  );
}

export default FullScree
