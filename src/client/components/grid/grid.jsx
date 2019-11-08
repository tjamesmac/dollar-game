import "./grid.scss";
import { generateBridges, generateRandomArray } from "./grid.helpers.jsx";
import GridItem from "../gridItem/gridItem.jsx";
import Line from "../line/line.jsx";
import React from "react";

// randomly generate x numbers in array and x = nodelength
// the array must equal the bridges - nodes + 1 or greater
// TODO: get number of bridges
// generate random array - 9 / 9 [1, -4, 5]
// add contents of array
// if not equal or greater, do again until equal

function Grid(props) {
    // generate bridges = bridges > 1 && bridges < nodes.length - 1
    const [generatedNodeValues, setNodeValues] = React.useState(null);
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
    return (
        <div className="grid-container">
            <GridItem rowLength={rowLength} columnsLength={columnsLength} nodeLength={nodeLength} nodeValues={nodeValueArray} bridges={bridgeArray}/>
            <Line bridges={bridgeArray} />
        </div>
    )
}

export default Grid;
