import { generateBridges, getNodeCoordinates } from "../grid/grid.helpers.jsx";
import React from "react";
function Line() {
    const [coordinates, setCoordinates] = React.useState(null);
    const coorArr = [];

    React.useEffect(() => {
        const coor = getNodeCoordinates(setCoordinates);
        const bridges = generateBridges(5);
        console.log(bridges);
    }, [])
    let line;
    if (coordinates) {
        const svgStyle = {
            position: "absolute",
        }
        const lineStyle = {
            stroke: "black",
        }
        console.log(coordinates, "coordinates");
        console.log(coordinates[0].x, coordinates[0].y, coordinates[1].x, coordinates[1].y )
        line = <svg height="500" width="500" style={svgStyle}>
            <line x1={coordinates[0].x} y1={coordinates[0].y} x2={coordinates[1].x} y2={coordinates[1].y} style={lineStyle}/>
        </svg>
    }
    return (
        <React.Fragment>
            {line}
        </React.Fragment>
    )
}

export default Line;
