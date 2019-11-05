import "./grid.scss";
import Node from "../node/node.jsx";
import React from "react";
import { generateGridArr } from "./grid.helpers.jsx";

function Grid(props) {
    // generate bridges = bridges > 1 && bridges < nodes.length - 1
    const { rowNumber, colNumber, nodeNumber } = props;

    const rowLength = [...Array(rowNumber).keys()];
    const columnsLength = [...Array(colNumber).keys()];
    const nodes = [[1, 3], [2, 2], [4, 4]];

    const gridArray = generateGridArr(rowLength, columnsLength); // returns array that represents grid

    for (const node of nodes) {
        for (const [index, item] of gridArray.entries()) {
            if (node[0] === index) {
                for (const iter of item) {
                    if (node[1] === iter.index) {
                        iter.active = true
                    }
                }
            }
        }
    }
    const gridMaker = gridArray.map((item, index) => {
        const rowMaker = item.map((row, rowIndex) => {
            if (row.active) {
                return (
                    <div className="row" key={rowIndex}><Node /></div>
                )
            } else {
                return (
                    <div className="row" key={rowIndex}>{rowIndex}</div>
                )
            }
        })
        return (
            <div className="col" key={index}>{rowMaker}</div>
        )
    })
    return(
        <div className="grid-container">
            {gridMaker}
        </div>
    )
}

export default Grid;
