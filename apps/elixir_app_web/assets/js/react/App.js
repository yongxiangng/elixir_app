import ModuleTable from "./components/ModuleTable";
import UpdateModuleButton from "./components/UpdateModuleButton";
import SelectModules from "./components/SelectModules";
import React, { useState, useEffect } from "react";
import { Row, Col, Divider } from "antd";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./index.css";

function App() {
  const [mods, setMods] = useState([]);
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
    <div>
      <Divider orientation="left">Search</Divider>
      <Row gutter={16} align="middle" justify="center">
        <Col span={18}>
          <SelectModules mods={mods} />
        </Col>
        <Col span={6}>
          <UpdateModuleButton onClick={setMods}>
            Update Modules
          </UpdateModuleButton>
        </Col>
      </Row>
      <Divider orientation="left">All modules</Divider>
      <ModuleTable mods={mods} />
    </div>
  );
}

export default App;
