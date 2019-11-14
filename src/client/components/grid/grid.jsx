import "./grid.scss";
import { bridgeBuilder, generateGrid, generateNodeCoordinates, generateRandomArray, nodeConnections } from "./grid-container.helpers.jsx";
import GridItem from "../buildGrid/buildGrid.jsx";
import Line from "../line/line.jsx";
import React from "react";

function Grid(props) {
    const { rows, columns, nodes } = props;
    
    const amountOfNodes = [...Array(nodes).keys()];

    const builtBridges = bridgeBuilder(amountOfNodes);
    const connectionMaker = nodeConnections(builtBridges);

    function getAmountofBridges() {
        let totalBridges = 0;
        for (const bridge of builtBridges) {
            totalBridges += bridge.length;
        }
        return totalBridges;
    }

    const randomValues = generateRandomArray(nodes, getAmountofBridges());
    const gridArray = generateGrid(rows, columns); // returns array that represents grid

    
    const coordinateRequirements = {
        amountOfNodes,
        columns,
        rows,
    }
    const nodeCordinates = generateNodeCoordinates(coordinateRequirements);

    return (
        <>
         

            <div className="grid-container">
                
                <GridItem
                    nodeValues={randomValues}
                    bridges={builtBridges}
                    gridArr={gridArray}
                    nodeCoor={nodeCordinates}
                    connections={connectionMaker}
                    columns={columns}
                    rows={rows}
                    nodes={amountOfNodes}
                />
                <Line bridges={connectionMaker} />
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
