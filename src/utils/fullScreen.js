export const isSupportFull = () => {
  let result = false;
  let element = document.documentElement;

  //IE 10及以下ActiveXObject
  if (window.ActiveXObject) {
    result = true;
  }
  //HTML W3C 提议
  else if (element.requestFullScreen) {
    result = true;
  }
  //IE11
  else if (element.msRequestFullscreen) {
    result = true;
  }
  // Webkit (works in Safari5.1 and Chrome 15)
  else if (element.webkitRequestFullScreen) {
    result = true;
  }
  // Firefox (works in nightly)
  else if (element.mozRequestFullScreen) {
    result = true;
  }

  return result;
};

//显示全屏
export const fullScreen = () => {
  let element = document.documentElement;
  try {
    //IE 10及以下ActiveXObject
    if (window.ActiveXObject) {
      // console.log("IE 10及以下ActiveXObject");
      // let WsShell =  new ActiveXObject("WScript.Shell");
      // WsShell.SendKeys("{F11}");
    } else if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      // IE11
      element.msRequestFullscreen();
    }
  } catch (error) {
    throw Error(error)
  }
};

//退出全屏
export const fullExit = () => {
  try {
    //IE ActiveXObject
    if (window.ActiveXObject) {
      // let WsShell = new ActiveXObject("WScript.Shell");
      // WsShell.SendKeys("{F11}");
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } catch (error) {
    throw Error(error)
  }
};
