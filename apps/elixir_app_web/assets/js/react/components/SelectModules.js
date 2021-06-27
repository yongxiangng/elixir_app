import React from "react";
import { Select } from "antd";

function SelectModules(props) {
  const { Option } = Select;
  const { mods, callback } = props;

  const children = [];
  mods.forEach((mod) => {
    children.push(
      <Option key={`${mod.module_code}-${mod.module_title}`}>
        {`${mod.module_code} ${mod.module_title}`}
      </Option>
    );
  });

  const handleChange = (arr) => {
    const newArr = [];
    arr.forEach((item) => {
      const info = item.split("-");
      newArr.push({
        module_code: info[0],
        module_title: info[1],
      });
    });
    callback(newArr);
  };

  return (
    <Select
      mode="multiple"
      allowClear
      style={{ width: "100%" }}
      placeholder="Select your modules here"
      onChange={handleChange}
    >
      {children}
    </Select>
  );
}

export default SelectModules;
