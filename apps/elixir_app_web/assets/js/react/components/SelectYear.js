import React from "react";
import { Select } from "antd";

function SelectYear(props) {
  const { Option } = Select;
  const { callback } = props;
  const today = new Date();

  const currAY =
    today.getMonth() <= 4 ? today.getFullYear() - 1 : today.getFullYear();
  const children = [];

  Array.from({ length: currAY - 2010 + 1 }, (_, i) => currAY - i).forEach(
    (year) => {
      children.push(
        <Option key={`${year}/${year + 1}`}>{`${year}/${year + 1}`}</Option>
      );
    }
  );

  return (
    <Select
      allowClear
      style={{ width: "100%" }}
      placeholder="Select academic year"
      onChange={callback}
    >
      {children}
    </Select>
  );
}

export default SelectYear;
