import "./grid.scss";
import { bridgeBuilder, generateGrid, generateNodeCoordinates, generateRandomValues, getAmountofBridges, nodeBridges } from "./grid.helpers.jsx";
import BuildGrid from "../buildGrid/buildGrid.jsx";
import BuildLines from "../buildLines/buildLines.jsx";
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
    const builtGrid = generateGrid(rows, columns); // returns array that represents grid
    const nodeCoordinates = generateNodeCoordinates(coordinateRequirements);

    return (
        <>
            <div className="grid-container">
                <BuildGrid
                    nodeValues={randomNodeValues}
                    bridges={builtBridges}
                    grid={builtGrid}
                    coordinates={nodeCoordinates}
                    connections={attachBridges}
                    columns={columns}
                    rows={rows}
                    nodes={amountOfNodes}
                />
                {/* <div className="line-container"> */}
                {/* <svg className="svg-line" height="100%" width="100%" viewBox="0 0 480 480"> */}
                <svg className="svg-line" height="100%" width="100%">
                    <BuildLines bridges={attachBridges} />
                </svg>
                {/* </div> */}
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
