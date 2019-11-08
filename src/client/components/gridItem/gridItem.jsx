import { generateBridges, generateGridArr, generateNodeCoordinates } from "../grid/grid.helpers.jsx";
import Node from "../node/node.jsx";
import React from "react";

function gridItem(props) {
    const { rowLength, columnsLength, nodeLength, nodeValues } = props;
    const [generatedNodeValues, setNodeValues] = React.useState(null);
    React.useEffect( () => {
        // setNodeValues(nodeValues);
    }, [])
    // console.log(generatedNodeValues, "nodeValues");
    
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
                console.log(row.count, "this is the counter value")
                return (
                    <div className="row" key={rowIndex}><Node id={row._id} value={nodeValues[row._id]} /></div>
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
    return (
        <React.Fragment>
            {gridMaker}
        </React.Fragment>
    )
}

export default gridItem;
