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
        Object.entries(bridges).forEach(([key, val]) => {
            for (const bridge of val) {
                line = <svg height="1000" width="1000" style={svgStyle} key={count + " line"}>
                    <line
                        x1={coordinates[key].x + 20}
                        y1={coordinates[key].y}
                        x2={coordinates[bridge].x + 20}
                        y2={coordinates[bridge].y}
                        style={lineStyle}
                    />
                </svg>
                lineArray.push(line);
                count ++
            }
        })
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
