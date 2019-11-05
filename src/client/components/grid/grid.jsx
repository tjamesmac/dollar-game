import "./grid.scss";
import Node from "../node/node.jsx";
import React from "react";

function Grid(props) {
    const { rowNumber, colNumber, nodeNumber } = props;
    console.log(nodeNumber);
    const row = [...Array(rowNumber).keys()];
    const col = [...Array(colNumber).keys()];
    const gridArray = [];
    const targetNode = [[1, 3], [2, 2], [4, 4]];
    for (const item of col) {
        const rowArray = [];
        for (const i of row) {
            const obj = {};
            obj.index = i;
            obj.active = false;
            rowArray.push(obj);
        }
        gridArray.push(rowArray);
    }
    for (const node of targetNode) {
        for (const [i, item] of gridArray.entries()) {
            if (node[0] === i) {
                console.log("hello");
                for (const iter of item) {
                    if (node[1] === iter.index) {
                        iter.active = true
                    }
                }
            }
        }
    }
    console.log(gridArray);

    const gridMaker = gridArray.map((item, index) => {
        console.log(item);
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
            grid go here
            {gridMaker}
        </div>
    )
}

export default Grid;
