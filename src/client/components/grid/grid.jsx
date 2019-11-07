import "./grid.scss";
import { generateBridges, generateGridArr, generateNodeCoordinates } from "./grid.helpers.jsx";
import Node from "../node/node.jsx";
import React from "react";

function Grid(props) {
    const [coordinates, setCoordinates] = React.useState(null);
    const [x, y] = React.useState(null);
    // generate bridges = bridges > 1 && bridges < nodes.length - 1
    const { rowNumber, colNumber, nodeNumber } = props;

    const rowLength = [...Array(rowNumber).keys()];
    const columnsLength = [...Array(colNumber).keys()];
    const nodeLength = [...Array(nodeNumber).keys()];

    const gridArray = generateGridArr(rowLength, columnsLength); // returns array that represents grid
    
    const coorArr = [];
    function getNodeCoordinates() {
        console.log("hello I am coordinates");
        const nodes = document.querySelectorAll(".node");
        console.log(nodes);
        for (const item of nodes) {
            const pos = item.getBoundingClientRect();
            coorArr.push(pos);
        }
        console.log(coorArr);
        setCoordinates(coorArr);
    }
    const nodeCordinates = generateNodeCoordinates(nodeLength, rowNumber, colNumber);
    React.useEffect(() => {
        getNodeCoordinates()
    }, []);

    

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
                return (
                    <div className="row" key={rowIndex}><Node id={row._id} bridges={generateBridges(nodeLength.length)} /></div>
                )
            } else {
                return (
                    <div className="row" key={rowIndex}>{rowIndex}</div>
                )
            }
        })
        return (
            <div className="col" key={index}>{rowMaker}</div>
        )
    })

    let line;
    if (coordinates) {
        const svgStyle = {
            position: "absolute",
        }
        const lineStyle = {
            stroke: "black",
        }
        console.log(coordinates);
        line = <svg height="500" width="500" style={svgStyle}>
            <line x1={coordinates[0].x} y1={coordinates[0].y} x2={coordinates[1].x} y2={coordinates[1].y} style={lineStyle}/>
        </svg>
    }
    return(
        <div className="grid-container">
            {line}
            {gridMaker}
        </div>
    )
}

export default Grid;
