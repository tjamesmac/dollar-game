import Node from "../node/node.jsx";
import React from "react";

// Lines aren't always matched up to the right nodes
// think we have the bridges backwards
// we need to subtract the values from every node that has a bridge with that ID


function GridBuilder(props) {
    const { nodeValues, bridges, gridArr, nodeCoor } = props;
    const [generatedNodeValues, setNodeValues] = React.useState(nodeValues);

    function nodeClick(nodeID) {

        const oldValues = generatedNodeValues;
        const id = nodeID;
        let value = generatedNodeValues[nodeID]
        const numberOfBridges = bridges[id].length;

        let clickedNodeValue = value - numberOfBridges;
        oldValues[id] = clickedNodeValue;
        console.log(bridges, "these are my bridges");
        // for (let bridgeVal of bridges[id]) {
        //     oldValues[bridgeVal] = oldValues[bridgeVal] + 1;
        // }
        let totalNodesConnected = [];
        
        for (const [index, bridgeVal] of bridges.entries()) {
            console.log(index, bridgeVal, "bridge value");
            for (const element of bridgeVal) {
                if (element ===id) {
                    totalNodesConnected.push(index);
                }
            }
        }
        for (const bridge of totalNodesConnected) {
            console.log(oldValues[bridge]);
            console.log(bridge, "bridge inside loop");
            oldValues[bridge] = oldValues[bridge] + 1
        }
        console.log(totalNodesConnected, "totalNodes connected");
        const a = oldValues;
        setNodeValues(a => [...a, oldValues])
    }
    let makeGrid;
    if (generatedNodeValues) {

        let count = 0;
        for (const node of nodeCoor) {
            for (const [index, item] of gridArr.entries()) {
                if (node[0] === index) {
                    for (const iter of item) {
                        if (node[1] === iter.index) {
                            iter.active = true
                            iter._id = count;
                            count += 1;
                        }
                    }
                }
            }
        }
        makeGrid = gridArr.map((item, index) => {
            const makeRows = item.map((row, rowIndex) => {
                if (row.active) {
                    return (
                        <div
                            onClick={() => nodeClick(row._id, generatedNodeValues[row._id])}
                            className="row"
                            key={row._id + "row"}
                        >
                            <Node id={row._id} value={generatedNodeValues[row._id]}  />
                        </div>
                    )
                } else {
                    return (
                        <div className="row" key={rowIndex}></div>
                    )
                }
            })
            return (
                <div className="col" key={index}>{makeRows}</div>
            )
        })
    }
    return (
        <React.Fragment>
            {makeGrid}
        </React.Fragment>
    )
}

export default GridBuilder;
