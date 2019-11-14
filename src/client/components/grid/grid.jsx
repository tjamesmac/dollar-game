import "./grid.scss";
import { bridgeBuilder, generateGrid, generateNodeCoordinates, generateRandomValues, getAmountofBridges, nodeBridges } from "./grid.helpers.jsx";
import BuildGrid from "../buildGrid/buildGrid.jsx";
import Line from "../line/line.jsx";
import React from "react";

function Grid(props) {
    const { rows, columns, nodes } = props;
    const amountOfNodes = [...Array(nodes).keys()];
    const coordinateRequirements = {
        amountOfNodes,
        columns,
        rows,
    }

    const builtBridges = bridgeBuilder(amountOfNodes);
    const amountOfBridges = getAmountofBridges(builtBridges);
    const attachBridges = nodeBridges(builtBridges);
    const randomNodeValues = generateRandomValues(nodes, amountOfBridges);
    const grid = generateGrid(rows, columns); // returns array that represents grid
    const nodeCordinates = generateNodeCoordinates(coordinateRequirements);

    return (
        <>
            <div className="grid-container">
                <BuildGrid
                    nodeValues={randomNodeValues}
                    bridges={builtBridges}
                    gridArr={grid}
                    nodeCoor={nodeCordinates}
                    connections={attachBridges}
                    columns={columns}
                    rows={rows}
                    nodes={amountOfNodes}
                />
                <Line bridges={attachBridges} />
            </div>
            <div className="button-container">
                <button className="refresh">
                    Refresh
                </button>
                <button className="refresh"> Undo </button>
            </div>
           

        </>
    )

}

export default Grid;
