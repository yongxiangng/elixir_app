import React from "react";
import { Button, message } from "antd";

function UpdateModuleButton(props) {
  const remote = `http://${window.location.hostname}:${window.location.port}/api/v1/update_modules`;

  const getMods = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => props.onClick(data));
  };

  const handleClick = () => {
    const hide = message.loading("Loading modules..", 0);
    setTimeout(hide, 2500);
    getMods(remote);
  };

  return <Button onClick={handleClick}>{props.children}</Button>;
}

export default UpdateModuleButton;
