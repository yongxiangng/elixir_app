import React, { useState } from "react";
import { Select, Space } from "antd";
import ModuleTable from "./ModuleTable";

function SelectModules(props) {
  const { Option } = Select;
  const { mods } = props;
  const [selectedMods, setSelectedMods] = useState([]);
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
    setSelectedMods(newArr);
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Select
        mode="multiple"
        allowClear
        style={{ width: "100%" }}
        placeholder="Select your modules here"
        onChange={handleChange}
      >
        {children}
      </Select>

      <ModuleTable mods={selectedMods} />
    </Space>
  );
}

export default SelectModules;
