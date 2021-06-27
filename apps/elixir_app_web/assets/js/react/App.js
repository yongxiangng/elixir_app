import ModuleTable from "./components/ModuleTable";
import UpdateModuleButton from "./components/UpdateModuleButton";
import SelectModules from "./components/SelectModules";
import SelectYear from "./components/SelectYear";
import React, { useState, useEffect } from "react";
import { Row, Col, Divider, Space } from "antd";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./index.css";

function App() {
  const [mods, setMods] = useState([]);
  const [selectedMods, setSelectedMods] = useState([]);
  const [selectedAY, setSelectedAY] = useState(undefined);
  const local = `http://${window.location.hostname}:${window.location.port}/api/v1/list_all_modules`;

  useEffect(() => {
    getMods(local);
  }, []);

  const getMods = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMods(data));
  };

  return (
    <Space direction="vertical">
      <Divider orientation="left">Select year</Divider>
      <Row gutter={16} justify="center" align="middle">
        <Col span={18}>
          <SelectYear callback={setSelectedAY} />
        </Col>
        <Col
          span={6}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <UpdateModuleButton year={selectedAY} onClick={setMods}>
            Update Modules
          </UpdateModuleButton>
        </Col>
      </Row>
      <Divider orientation="left">Search</Divider>
      <SelectModules mods={mods} callback={setSelectedMods} />
      <ModuleTable mods={selectedMods} />
      <Divider orientation="left">All modules</Divider>
      <ModuleTable mods={mods} />
    </Space>
  );
}

export default App;
