import ModuleBubble from "./components/ModuleBubble";
import React, { useEffect } from "react";
import { Input } from "antd";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./index.css";

function App() {
  const mods = [
    {
      module_code: "CS0101S",
      module_title: "Programming 0",
      prerequisites: "None",
    },
    {
      module_code: "CS1101S",
      module_title: "Programming 1",
      prerequisites: "None",
    },
    {
      module_code: "CS2101S",
      module_title: "Programming 2",
      prerequisites: "None",
    },
    {
      module_code: "CS3101S",
      module_title: "Programming 3",
      prerequisites: "None",
    },
    {
      module_code: "CS4101S",
      module_title: "Programming 4",
      prerequisites: "None",
    },
    {
      module_code: "CS5101S",
      module_title: "Programming 5",
      prerequisites: "None",
    },
    {
      module_code: "CS6101S",
      module_title: "Programming 6",
      prerequisites: "None",
    },
    {
      module_code: "CS7101S",
      module_title: "Programming 7",
      prerequisites: "None",
    },
  ];

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
