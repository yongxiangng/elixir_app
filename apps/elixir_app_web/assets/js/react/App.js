import ModuleBubble from "./components/ModuleBubble";
import React, { useState, useEffect } from "react";
import { Input, Row, Col, Button } from "antd";

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

  return (
    <div>
      Hello this is react!
      <Row gutter={16} align="middle" justify="center">
        <Col span={18}>
          <Input placeholder="Add module" />
        </Col>
        <Col span={6}>
          <Button onClick={() => getMods(remote)}>Update Modules</Button>
        </Col>
      </Row>
      {mods.map((mod, key) => (
        <ModuleBubble key={key} {...mod} />
      ))}
    </div>
  );
}

export default App;
