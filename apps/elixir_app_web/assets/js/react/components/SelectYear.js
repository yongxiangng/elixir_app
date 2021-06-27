import React, { useState } from "react";
import { Select, Row, Col } from "antd";
import UpdateModuleButton from "./UpdateModuleButton";

function SelectYear(props) {
  const { Option } = Select;
  const { onClick } = props;
  const [selectedAY, setSelectedAY] = useState(undefined);
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
    <Row gutter={16} justify="center" align="middle">
      <Col span={18}>
        <Select
          allowClear
          style={{ width: "100%" }}
          placeholder="Select academic year"
          onChange={setSelectedAY}
        >
          {children}
        </Select>
      </Col>
      <Col
        span={6}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <UpdateModuleButton year={selectedAY} onClick={onClick}>
          Update Modules
        </UpdateModuleButton>
      </Col>
    </Row>
  );
}

export default SelectYear;
