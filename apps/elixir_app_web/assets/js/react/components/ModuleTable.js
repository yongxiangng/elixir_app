import React from "react";
import { Row, Col } from "antd";
import ModuleBubble from "./ModuleBubble";

function ModuleTable(props) {
  const { mods } = props;
  const len = mods.length;
  const rows = len / 6;

  return (
    <Row gutter={[16, 16]}>
      {mods.map((mod, key) => (
        <Col key={key} span={4}>
          <ModuleBubble {...mod} />
        </Col>
      ))}
    </Row>
  );
}

export default ModuleTable;
