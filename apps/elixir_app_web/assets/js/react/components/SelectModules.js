import React from "react";
import { Select } from "antd";

function SelectModules(props) {
  const { Option } = Select;
  const { mods } = props;

  const children = [];
  mods.forEach((mod) => {
    children.push(
      <Option key={`${mod.module_code} ${mod.module_title}`}>
        {`${mod.module_code} ${mod.module_title}`}
      </Option>
    );
  });

  return (
    <>
      <Select
        mode="multiple"
        allowClear
        style={{ width: "100%" }}
        placeholder="Select your modules here"
      >
        {children}
      </Select>
    </>
  );
}

export default SelectModules;
