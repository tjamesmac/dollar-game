import { generateGridArr, generateNodeCoordinates } from "../grid/grid.helpers.jsx";
import Node from "../node/node.jsx";
import React from "react";

// have values
// get bridges
// need to minus values on click from bridge values


function gridItem(props) {
    const { rowLength, columnsLength, nodeLength, nodeValues, bridges } = props;
    const [generatedNodeValues, setNodeValues] = React.useState(null);
    console.log(bridges, "need these bridges");
    function nodeValueSetter(val) {
        setNodeValues(val)
    }
    React.useEffect( () => {
        nodeValueSetter(nodeValues)
    }, [])

    function nodeClick(nodeID) {
        console.log("hello");
        console.log(nodeID);
        console.log(generatedNodeValues[nodeID])
    }
    
    let gridMaker;
    if (generatedNodeValues) {

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
                    console.log(row._id, "this is the id")
                    return (
                        <div
                            className="row"
                            key={row._id + "row"}
                        >
                            <Node id={row._id} value={generatedNodeValues[row._id]} clickHandler={() => nodeClick(row._id)} />
                        </div>
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
    }
    return (
        <React.Fragment>
            {gridMaker}
        </React.Fragment>
    )
}

export default gridItem;
