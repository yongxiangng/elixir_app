import React from "react";
import { Row, Col } from "antd";
import ModuleBubble from "./ModuleBubble";

function ModuleTable(props) {
  const { mods } = props;
  const len = mods.length;

  return (
    <Row gutter={[16, 16]}>
      {mods.map((mod, key) => (
        <Col key={key} span={4} style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <ModuleBubble {...mod} />
        </Col>
      ))}
    </Row>
  );
}

export default ModuleTable;
