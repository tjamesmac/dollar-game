import "./grid.scss";
import { generateGridArr, generateNodeCoordinates } from "./grid.helpers.jsx";
import Node from "../node/node.jsx";
import React from "react";

function Grid(props) {
    // generate bridges = bridges > 1 && bridges < nodes.length - 1
    const { rowNumber, colNumber, nodeNumber } = props;

    const rowLength = [...Array(rowNumber).keys()];
    const columnsLength = [...Array(colNumber).keys()];
    const nodeLength = [...Array(nodeNumber).keys()];
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
    }

    const nodes = [[getRandomInt(4),getRandomInt(4)], [2, 2], [4, 4]];
    
    const gridArray = generateGridArr(rowLength, columnsLength); // returns array that represents grid
    const nodeCordinates = generateNodeCoordinates(nodeLength, rowNumber, colNumber);


    for (const node of nodeCordinates) {
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
