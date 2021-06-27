import React from "react";
import { Button, message } from "antd";

function UpdateModuleButton(props) {
  const { children, year } = props;

  // TODO: update endpoint with year
  const remote = `http://${window.location.hostname}:${window.location.port}/api/v1/update_modules`;

  const getMods = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => props.onClick(data));
  };

  const handleClick = () => {
    const hide = year
      ? message.loading("Loading modules..", 0)
      : message.error("Please select year", 0);
    setTimeout(hide, 2500);
    if (year) {
      getMods(remote);
    }
  };

  return <Button onClick={handleClick}>{children}</Button>;
}

export default UpdateModuleButton;
