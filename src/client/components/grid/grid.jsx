import "./grid.scss";
import GridItem from "../gridItem/gridItem.jsx";
import Line from "../line/line.jsx";
import React from "react";

// collect all 'grid' related items and put into a new component
// collect all line related items and put into a new component
// treat them separately


function Grid(props) {
    // generate bridges = bridges > 1 && bridges < nodes.length - 1
    const { rowNumber, colNumber, nodeNumber } = props;
    const rowLength = [...Array(rowNumber).keys()];
    const columnsLength = [...Array(colNumber).keys()];
    const nodeLength = [...Array(nodeNumber).keys()];

    return (
        <div className="grid-container">
            <GridItem rowLength={rowLength} columnsLength={columnsLength} nodeLength={nodeLength} />
            <Line />
        </div>
    )
}

export default Grid;
