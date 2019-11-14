import Node from "../node/node.jsx";
import React from "react";
import { generateNodeCoordinates } from "../grid/grid.helpers.jsx";

// TODO:
// make buttons look like they've been clicked
// fix nodes appearing in a straight line
// add win condition and let user know they've won
// add user difficulty setting

// DONE:
// make sure that the lines are unique
// turns till complete
// console.log the win number

function BuildGrid(props) {
    const { nodeValues, grid, coordinates, connections } = props;

    const [isGameWon, setIsGameWon] = React.useState(null);
    const [getNodeValues, setNodeValues] = React.useState(nodeValues);
    const [turnCount, setTurnCount] = React.useState(0);

    function handleClick(id) {
        setTurnCount(turnCount + 1);
        const currentValues = getNodeValues;
        const allConnections = connections[id];

        let nodeValue = getNodeValues[id]
        currentValues[id] = nodeValue - allConnections.length;

        for (const connection of allConnections) {
            currentValues[connection] = currentValues[connection] + 1;
        }
        setNodeValues(oldValues => [...oldValues]) // this works right now
        const positive = 0;
        const newFilter = currentValues.filter(value => value >= positive);
        if (newFilter.length === nodeValues.length){
            setIsGameWon(true);
        }
    }

    let buildGrid;
    if (getNodeValues) {
        let count = 0;
        for (const node of coordinates) {
            for (const [index, row] of grid.entries()) {
                const xPos = node[0] // x coordinate
                if (xPos === index) {
                    for (const cell of row) {
                        const yPos = node[1];
                        if (yPos === cell.index) {
                            cell.active = true
                            cell._id = count;
                            count += 1;
                        }
                    }
                }
            }
        }
        buildGrid = grid.map((item, index) => {
            const buildRows = item.map((row, rowIndex) => {
                if (row.active) {
                    const nodeID = row._id;
                    return (
                        <div
                            onClick={() => handleClick(nodeID, getNodeValues[nodeID])}
                            className="row"
                            key={nodeID + "row"}
                        >
                            <Node id={nodeID} value={getNodeValues[nodeID]} />
                        </div>
                    )
                } else {
                    return (
                        <div className="row" key={rowIndex}></div>
                    )
                }
            })
            return (
                <div className="col" key={index}>{buildRows}</div>
            )
        })
    }
    if (isGameWon) {
        alert("You won!")
        //  location.reload();
        // console.log(nodes, rows, columns);
        // const newCoordinates = generateNodeCoordinates(nodes, rows, columns);
        // setNodeValues(newCoordinates);
    }
    return (
        <>
            <div>Turn count: {turnCount}</div>
            {buildGrid}
        </>
    )
}

export default BuildGrid;
