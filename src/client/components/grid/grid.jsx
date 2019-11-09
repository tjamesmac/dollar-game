import "./grid.scss";
import { generateBridges, generateGridArr, generateNodeCoordinates, generateRandomArray } from "./grid.helpers.jsx";
import GridItem from "../gridItem/gridItem.jsx";
import Line from "../line/line.jsx";
import React from "react";

function Grid(props) {
    const { rowNumber, colNumber, nodeNumber } = props;
    const rowLength = [...Array(rowNumber).keys()];
    const columnsLength = [...Array(colNumber).keys()];
    const nodeLength = [...Array(nodeNumber).keys()];

    function bridgeValidator(index, nodeNumber) {
        let bridge = generateBridges(nodeNumber);
        if (bridge.includes(index)) {
            const newBridge = generateBridges(nodeNumber);
            bridge = newBridge;
            return bridgeValidator(index, nodeNumber);
        } else {
            bridgeArray.push(bridge);
        }
    }
    const bridgeArray = [];
    for (const node of nodeLength) {
        bridgeValidator(node, nodeNumber);
    }

    let totalBridges = 0;
    for (const bridge of bridgeArray) {
        totalBridges += bridge.length;
    }
    const nodeValueArray = generateRandomArray(nodeNumber, totalBridges);
    const gridArray = generateGridArr(rowLength, columnsLength); // returns array that represents grid
        
    const nodeCordinates = generateNodeCoordinates(nodeLength, rowLength.length, columnsLength.length);

    return (
        <div className="grid-container">
            <GridItem
                rowLength={rowLength}
                columnsLength={columnsLength}
                nodeLength={nodeLength}
                nodeValues={nodeValueArray}
                bridges={bridgeArray}
                gridArr={gridArray}
                nodeCoor={nodeCordinates}
            />
            <Line bridges={bridgeArray} />
        </div>
    )
}

export default Grid;
