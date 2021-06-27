import React from "react";
import { Tag, Tooltip } from "antd";

function ModuleBubble(props) {
  const colors = [
    "default",
    "#13a000",
    "#34dddd",
    "#eb9486",
    "#9370db",
    "#1133aa",
    "#7e7f9a",
    "#97a7b3",
  ];
  const { module_code, module_title } = props;
  const color =
    module_code.match(/[0-9]/g).length == 0
      ? 0
      : module_code.match(/[0-9]/g)[0];
  return (
    <Tooltip title={module_title}>
      <Tag color={colors[color]}>{module_code}</Tag>
    </Tooltip>
  );
}

export default ModuleBubble;
