import Node from "../node/node.jsx";
import React from "react";

// TODO:
// make buttons look like they've been clicked
// fix nodes appearing in a straight line
// add win condition and let user know they've won
// add user difficulty setting

// DONE:
// make sure that the lines are unique
// turns till complete
// console.log the win number

function GridBuilder(props) {
    const { nodeValues, gridArr, nodeCoor, connections } = props;
    const [gameWon, setGameWon] = React.useState(null);
    const [generatedNodeValues, setNodeValues] = React.useState(nodeValues);
    const [turnCount, setTurnCount] = React.useState(0);

    function nodeClick(nodeID) {
        setTurnCount(turnCount + 1);
        const oldValues = generatedNodeValues;
        const id = nodeID;
        const allConnections = connections[id];
        let value = generatedNodeValues[id]
        oldValues[id] = value - allConnections.length;
        for (const connection of allConnections) {
            oldValues[connection] = oldValues[connection] + 1;
        }
        const newValues = oldValues;
        setNodeValues(newValues => [...newValues]) // this works right now
        const newFilter = newValues.filter(x => x >= 0);
        if (newFilter.length === nodeValues.length){
            console.log("I win");
            setGameWon(true);
        }
    }
    let makeGrid;
    if (generatedNodeValues) {

        let count = 0;
        for (const node of nodeCoor) {
            for (const [index, item] of gridArr.entries()) {
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
        makeGrid = gridArr.map((item, index) => {
            const makeRows = item.map((row, rowIndex) => {
                if (row.active) {
                    return (
                        <div
                            onClick={() => nodeClick(row._id, generatedNodeValues[row._id])}
                            className="row"
                            key={row._id + "row"}
                        >
                            <Node id={row._id} value={generatedNodeValues[row._id]}  />
                        </div>
                    )
                } else {
                    return (
                        <div className="row" key={rowIndex}></div>
                    )
                }
            })
            return (
                <div className="col" key={index}>{makeRows}</div>
            )
        })
    }
    let gameWonAlert;
    if (gameWon){
        // gameWonAlert = <div>You have won!</div>
        alert("You won!")
    }
    return (
        <React.Fragment>
            {gameWonAlert}
            <div>Turn count: {turnCount}</div>
            {makeGrid}
        </React.Fragment>
    )
}

export default GridBuilder;
