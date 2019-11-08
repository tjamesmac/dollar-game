import React from "react";
import { getNodeCoordinates } from "../grid/grid.helpers.jsx";

function Line(props) {
    const [coordinates, setCoordinates] = React.useState(null);
    const { bridges } = props;

    React.useEffect(() => {
        const coor = getNodeCoordinates();
        setCoordinates(coor);
    }, [])
    let line;
    let renderLines;
    if (coordinates) {
        const svgStyle = {
            position: "absolute",
            pointerEvents: "none",
        }
        const lineStyle = {
            stroke: "black",
        }
        const lineArray = [];
        let count = 0;
        for (let [index, coor] of bridges.entries()) {
            coor.map( (item, i) => {
                console.log(index," this should be index");
                console.log(coordinates," this should be index");
                line = <svg height="500" width="500" style={svgStyle} key={count}>
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
