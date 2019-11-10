import "./grid.scss";
import { bridgeBuilder, generateGridArr, generateNodeCoordinates, generateRandomArray } from "./grid-container.helpers.jsx";
import GridItem from "../gridBuilder/gridBuilder.jsx";
import Line from "../line/line.jsx";
import React from "react";

function GridContainer(props) {
    const { rowNumber, colNumber, nodeNumber } = props;
    
    const rowLength = [...Array(rowNumber).keys()];
    const columnsLength = [...Array(colNumber).keys()];
    const nodeLength = [...Array(nodeNumber).keys()];
    const builtBridges = bridgeBuilder(nodeLength);

    let totalBridges = 0;
    for (const bridge of builtBridges) {
        totalBridges += bridge.length;
    }

    const nodeValueArray = generateRandomArray(nodeNumber, totalBridges);
    const gridArray = generateGridArr(rowLength, columnsLength); // returns array that represents grid
    const nodeCordinates = generateNodeCoordinates(nodeLength, rowLength.length, columnsLength.length);

    return (
        <div className="grid-container">
            <GridItem
                nodeValues={nodeValueArray}
                bridges={builtBridges}
                gridArr={gridArray}
                nodeCoor={nodeCordinates}
            />
            <Line bridges={builtBridges} />
        </div>
    )
}

export default GridContainer;
