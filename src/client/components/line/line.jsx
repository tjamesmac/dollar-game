import React from "react";
import { getNodeCoordinates } from "../grid/grid.helpers.jsx";

function Line(props) {
    const [coordinates, setCoordinates] = React.useState(null);
    const { bridges } = props;
    function coordinateSetter() {
        const wa = getNodeCoordinates();
        setCoordinates(wa);
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
