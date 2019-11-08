import { generateBridges, generateGridArr, generateNodeCoordinates } from "../grid/grid.helpers.jsx";
import Node from "../node/node.jsx";
import React from "react";

function gridItem(props) {
    const { rowLength, columnsLength, nodeLength } = props;
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
    const gridMaker = gridArray.map((item, index) => {
        const rowMaker = item.map((row, rowIndex) => {
            if (row.active) {
                console.log(row._id, "row id")
                return (
                    <div className="row" key={rowIndex}><Node id={row._id} bridges={generateBridges(nodeLength.length)} /></div>
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
    return (
        <div>
            {gridMaker}
        </div>
    )
}

export default gridItem;
