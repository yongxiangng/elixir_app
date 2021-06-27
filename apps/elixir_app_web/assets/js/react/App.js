import ModuleTable from "./components/ModuleTable";
import React, { useState, useEffect } from "react";
import { Input, Row, Col, Button, message } from "antd";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./index.css";

function App() {
  const [mods, setMods] = useState([]);
  const local = `http://${window.location.hostname}:${window.location.port}/api/v1/list_all_modules`;
  const remote = `http://${window.location.hostname}:${window.location.port}/api/v1/update_modules`;

  useEffect(() => {
    getMods(local);
  }, []);

  const getMods = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMods(data));
  };

  const handleClick = () => {
    const hide = message.loading("Loading modules..", 0);
    setTimeout(hide, 2500);
    getMods(remote);
  };

  return (
    <div>
      Hello this is react!
      <Row gutter={16} align="middle" justify="center">
        <Col span={18}>
          <Input placeholder="Add module" />
        </Col>
        <Col span={6}>
          <Button onClick={handleClick}>Update Modules</Button>
        </Col>
      </Row>
      <ModuleTable mods={mods} />
    </div>
  );
}

export default App;
