import { generateGridArr, generateNodeCoordinates } from "../grid/grid.helpers.jsx";
import Node from "../node/node.jsx";
import React from "react";

// have values
// get bridges
// need to minus values on click from bridge values


function gridItem(props) {
    const { rowLength, columnsLength, nodeLength, nodeValues, bridges } = props;
    const [generatedNodeValues, setNodeValues] = React.useState(nodeValues);
    const [number, setNumber] = React.useState(0);

    function nodeClick(nodeID, val) {
        console.log(nodeID, "this is the nodeID");
        console.log(val, "this is the nodeID");
        const oldValues = generatedNodeValues;
        const id = nodeID;
        let value = generatedNodeValues[nodeID]
        const numberOfBridges = bridges[id].length;

        let clickedNodeValue = value - numberOfBridges;
        oldValues[id] = clickedNodeValue;
        for (let bridgeVal of bridges[id]) {
            oldValues[bridgeVal] = oldValues[bridgeVal] + 1;
        }
        const a = oldValues;
        // setNumber(number+1);
        setNodeValues(a => [...a, oldValues])
        console.log(generatedNodeValues);
    }
    function testClicker() {
        setNumber(number + 1);
    }
    let gridMaker;
    if (generatedNodeValues) {

        const gridArray = generateGridArr(rowLength, columnsLength); // returns array that represents grid
            
        const nodeCordinates = generateNodeCoordinates(nodeLength, rowLength.length, columnsLength.length);
        let count = 0;
        for (const node of nodeCordinates) {
            for (const [index, item] of gridArray.entries()) {
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
        gridMaker = gridArray.map((item, index) => {
            const rowMaker = item.map((row, rowIndex) => {
                if (row.active) {
                    console.log(row._id, "this is the id")
                    console.log(generatedNodeValues, "these are the values before the node");
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
                <div className="col" key={index}>{rowMaker}</div>
            )
        })
    }
    console.log(generatedNodeValues);
    return (
        <React.Fragment>
            {gridMaker}
        </React.Fragment>
    )
}

export default gridItem;
