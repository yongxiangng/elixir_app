import ModuleBubble from "./components/ModuleBubble";
import React, { useState, useEffect } from "react";
import { Input } from "antd";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./index.css";

function App() {
  const [mods, setMods] = useState([])

  useEffect(() => {
    getMods();
  }, [])

  const getMods = async () => {
    const res = await fetch("http://localhost:4000/api/v1/list_all_modules")
    const data = await res.json();
    setMods(data);
  }

  return (
    <div>
      Hello this is react!
      <Input placeholder="Add module" />
      {mods.map((mod, key) => (
        <ModuleBubble key={key} {...mod} />
      ))}
    </div>
  );
}

export default App;
