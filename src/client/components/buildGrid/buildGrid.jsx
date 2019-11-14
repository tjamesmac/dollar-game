import Node from "../node/node.jsx";
import React from "react";
// import { generateNodeCoordinates } from "../grid/grid.helpers.jsx";

// TODO:
// fix nodes appearing in a straight line
// add win condition and let user know they've won
// add user difficulty setting
// add undo button
// add function to refresh button
// fix scss
// separate css into distinct files and correct class names

// DONE:
// align everything


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
        buildGrid = grid.map((row, rowIndex) => {
            const buildRows = row.map((cell, cellIndex) => {
                if (cell.active) {
                    const nodeID = cell._id;
                    return (
                        <div
                            onClick={() => handleClick(nodeID, getNodeValues[nodeID])}
                            className="cell"
                            key={nodeID + "row"}
                        >
                            <Node id={nodeID} value={getNodeValues[nodeID]} />
                        </div>
                    )
                } else {
                    return (
                        <div className="cell" key={cellIndex}></div>
                    )
                }
            })
            return (
                <div className="row" key={rowIndex}>{buildRows}</div>
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
