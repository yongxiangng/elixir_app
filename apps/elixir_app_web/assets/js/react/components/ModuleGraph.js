import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import G6 from "@antv/g6";

function ModuleGraph(props) {
  const data = {
    // The array of nodes
    nodes: [
      {
        label: "node0",
        id: "node0", // String, unique and required
      },
      {
        label: "node1",
        id: "node1", // String, unique and required
      },
      {
        label: "node2",
        id: "node2", // String, unique and required
      },
    ],
    // The array of edges
    edges: [
      {
        source: "node1", // String, required, the id of the source node
        target: "node2", // String, required, the id of the target node
      },
    ],
  };

  const ref = React.useRef(null);
  let graph = null;
  useEffect(() => {
    if (!graph) {
      G6.registerNode(
        "sql",
        {
          drawShape(cfg, group) {
            const rect = group.addShape("rect", {
              attrs: {
                x: -50,
                y: -12.5,
                width: 100,
                height: 25,
                radius: 5,
                fill: "#C6E5FF",
              },
              name: "rect-shape",
            });
            if (cfg.name) {
              group.addShape("text", {
                attrs: {
                  text: cfg.name,
                  x: 0,
                  y: 0,
                  fill: "#00287E",
                  fontSize: 14,
                  textAlign: "center",
                  textBaseline: "middle",
                  fontWeight: "bold",
                },
                name: "text-shape",
              });
            }
            return rect;
          },
        },
        "single-node"
      );
      const container = ReactDOM.findDOMNode(ref.current);
      graph = new G6.Graph({
        container: container,
        width: container.scrollWidth,
        height: 800,
        fitView: true,
        maxZoom: 2,
        modes: {
          default: ["drag-canvas", "drag-node", "zoom-canvas"],
        },
        layout: {
          type: "dagre",
          rankdir: "UL",
          align: "UL",
          nodesepFunc: (d) => 10,
          ranksep: 15,
        },
        defaultNode: {
          type: "sql",
        },
        defaultEdge: {
          type: "polyline",
          size: 1,
          color: "#e2e2e2",
          style: {
            endArrow: {
              path: "M 0,0 L 8,4 L 8,-4 Z",
              fill: "#e2e2e2",
            },
            radius: 20,
          },
        },
      });
    }
    graph.data(data);
    graph.render();
  }, []);

  return (
    <div
      style={{
        borderStyle: "solid",
        borderRadius: 10,
        borderWidth: "thin",
        borderColor: "#E0E0E0",
      }}
      ref={ref}
    ></div>
  );
}

export default ModuleGraph;
