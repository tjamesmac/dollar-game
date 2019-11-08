import { generateGridArr, generateNodeCoordinates } from "../grid/grid.helpers.jsx";
import Node from "../node/node.jsx";
import React from "react";

function gridItem(props) {
    const { rowLength, columnsLength, nodeLength, nodeValues } = props;
    const [generatedNodeValues, setNodeValues] = React.useState(null);
    React.useEffect( () => {
        // setNodeValues(nodeValues);
    }, [])
    console.log(generatedNodeValues, "generated");
    // console.log(generatedNodeValues, "nodeValues");
    
    
    let gridMaker;
    // if (generatedNodeValues) {
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
                console.log(rowIndex, "this is the rowIndex");
                console.log(row._id, "this is the row id");
                return (
                    <div className="row" key={row._id + "row"}><Node id={row._id} value={nodeValues[row._id]} /></div>
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
    // }
    return (
        <React.Fragment>
            {gridMaker}
        </React.Fragment>
    )
}

export default gridItem;
