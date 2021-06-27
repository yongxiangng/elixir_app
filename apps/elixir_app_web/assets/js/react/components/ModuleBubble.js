import React from "react";
import { Tag, Tooltip } from "antd";

function ModuleBubble(props) {
  const colors = [
    "default",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
    "magenta",
    "red",
  ];
  const { module_code, module_title } = props;
  const color =
    module_code.match(/[0-9]/g).length == 0
      ? 0
      : module_code.match(/[0-9]/g)[0];
  return (
    <Tooltip title={module_title}>
      <Tag
        color={colors[color]}
        style={{ width: "90%", textAlign: "center", color: "black" }}
      >
        {module_code}
      </Tag>
    </Tooltip>
  );
}

export default ModuleBubble;
