import ModuleTable from "./components/ModuleTable";
import SelectModules from "./components/SelectModules";
import SelectYear from "./components/SelectYear";
import ModuleGraph from "./components/ModuleGraph";
import React, { useState, useEffect } from "react";
import { Divider } from "antd";

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
    <>
      <Divider orientation="left">Select Year</Divider>
      <SelectYear onClick={setMods} />
      <Divider orientation="left">Search</Divider>
      <SelectModules mods={mods} />
      <Divider orientation="left">Dependency Graph</Divider>
      <ModuleGraph />
      <Divider orientation="left">All Modules</Divider>
      <ModuleTable mods={mods} />
    </>
  );
}

export default App;
