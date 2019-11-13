import "./grid.scss";
import { bridgeBuilder, generateGridArr, generateNodeCoordinates, generateRandomArray, nodeConnections } from "./grid-container.helpers.jsx";
import GridItem from "../buildGrid/buildGrid.jsx";
import Icon from "../../assets/refresh.svg";
import Line from "../line/line.jsx";
import React from "react";

function GridContainer(props) {
    const { rows, columns, nodes } = props;
    
    const rowLength = [...Array(rows).keys()];
    const columnsLength = [...Array(columns).keys()];
    const amountOfNodes = [...Array(nodes).keys()];

    const builtBridges = bridgeBuilder(amountOfNodes);
    const connectionMaker = nodeConnections(builtBridges);

    function handleRefresh() {
        location.reload();
    }



    function getAmountofBridges() {
        let totalBridges = 0;
        for (const bridge of builtBridges) {
            totalBridges += bridge.length;
        }
        return totalBridges;
    }

    const randomValues = generateRandomArray(nodes, getAmountofBridges());
    const gridArray = generateGridArr(rowLength, columnsLength); // returns array that represents grid

    
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
                    columns={columnsLength.length}
                    rows={rowLength.length}
                    nodes={amountOfNodes}
                />
                <Line bridges={connectionMaker} />
            </div>
            <div className="button-container">
                <button
                    onClick={() => handleRefresh()}
                    className="refresh">
                    <img className="refresh-icon" src={
                        Icon
                    }/>
                </button>
                <button className="refresh"> Undo </button>
            </div>
           

        </>
    )

}

export default GridContainer;
