import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';

function ModuleGraph(props) {
  const data = {
    // The array of nodes
    nodes: [
      {
        id: 'node1', // String, unique and required
        x: 100, // Number, the x coordinate
        y: 200, // Number, the y coordinate
      },
      {
        id: 'node2', // String, unique and required
        x: 300, // Number, the x coordinate
        y: 200, // Number, the y coordinate
      },
    ],
    // The array of edges
    edges: [
      {
        source: 'node1', // String, required, the id of the source node
        target: 'node2', // String, required, the id of the target node
      },
    ],
  };

  const ref = React.useRef(null);
  let graph = null;

  useEffect(() => {
    if (!graph) {
      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current),
        width: 1200,
        height: 800,
        modes: {
          default: ['drag-canvas'],
        },
        layout: {
          type: 'dagre',
          direction: 'LR',
        },
        defaultNode: {
          type: 'node',
          labelCfg: {
            style: {
              fill: '#000000A6',
              fontSize: 10,
            },
          },
          style: {
            stroke: '#72CC4A',
            width: 150,
          },
        },
        defaultEdge: {
          type: 'polyline',
        },
      });
    }
    graph.data(data);
    graph.render();
  }, []);

  return <div ref={ref}></div>;
}

export default ModuleGraph;
