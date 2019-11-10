import React from "react";
import { getNodeCoordinates } from "../grid-container/grid-container.helpers.jsx";

function Line(props) {
    const [coordinates, setCoordinates] = React.useState(null);
    const { bridges } = props;
    function coordinateSetter() {
        const coor = getNodeCoordinates();
        setCoordinates(coor);
    }
    React.useEffect(() => {
        window.addEventListener("load", () => {
            coordinateSetter();
        })
    }, [])
    let line;
    let renderLines;
    if (coordinates) {
        const svgStyle = {
            position: "absolute",
            pointerEvents: "none",
            "zIndex": "1",
        }
        const lineStyle = {
            stroke: "black",
            "zIndex": "1",
        }
        const lineArray = [];
        let count = 0;
        console.log(bridges, "these are my line bridges");
        for (let [index, coor] of bridges.entries()) {
            coor.map( (item, i) => {
                line = <svg height="1000" width="1000" style={svgStyle} key={count}>
                    <line x1={coordinates[index].x + 20} y1={coordinates[index].y} x2={coordinates[item].x + 20} y2={coordinates[item].y} style={lineStyle}/>
                </svg>
                lineArray.push(line);
                count ++
            })
        }
        renderLines = lineArray.map((item) => {
            return item;
        })
    }
    return (
        <React.Fragment>
            {renderLines}
        </React.Fragment>
    )
}

export default Line;
