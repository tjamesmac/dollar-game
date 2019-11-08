import "./grid.scss";
import GridItem from "../gridItem/gridItem.jsx";
import Line from "../line/line.jsx";
import React from "react";
import { generateBridges } from "./grid.helpers.jsx";

// collect all 'grid' related items and put into a new component
// collect all line related items and put into a new component
// treat them separately


function Grid(props) {
    // generate bridges = bridges > 1 && bridges < nodes.length - 1
    const { rowNumber, colNumber, nodeNumber } = props;
    const rowLength = [...Array(rowNumber).keys()];
    const columnsLength = [...Array(colNumber).keys()];
    const nodeLength = [...Array(nodeNumber).keys()];

    const bridgeArray = [];
    for (const node of nodeLength) {
        const bridge = generateBridges(nodeNumber);
        bridgeArray.push(bridge);
    }
    console.log(bridgeArray, "here are the line bridges");

    return (
        <div className="grid-container">
            <GridItem rowLength={rowLength} columnsLength={columnsLength} nodeLength={nodeLength} />
            <Line bridges={bridgeArray} nodeNumber={nodeNumber}/>
        </div>
    )
}

export default Grid;
