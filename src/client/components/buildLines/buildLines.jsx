import React from "react";
import { getNodeCoordinates } from "../grid/grid.helpers.jsx";

function buildLines(props) {
    const [coordinates, setCoordinates] = React.useState(null);
    const { bridges } = props;
    // this removes duplicates from 'bridges' to prevent copies of same lines
    function existingBridges(existingBridges) {
        // creates deep copy of an object
        // doesn't rely on reference in memory
        // doesn't overwrite existing bridges causing the nodes to not pass values correctly
        const uniqueBridges = JSON.parse(JSON.stringify(existingBridges));
        console.log(uniqueBridges, "these are unique")
        Object.entries(uniqueBridges).forEach(([key, val]) => {
            for (const item of val) {
                if (uniqueBridges[item]) {
                    uniqueBridges[item].splice(key, 1);
                }
            }
        });
        // console.log(newTest);
        return uniqueBridges;
    }
    React.useEffect(() => {
        window.addEventListener("load", () => {
            const getCoordinates = getNodeCoordinates();
            setCoordinates(getCoordinates);
        })
    }, [])
    let line;
    let renderLines;
    if (coordinates) {
        const lineStyle = {
            //  stroke: "black",
            //   "zIndex": "1",
        }
        const lineArray = [];
        let count = 0;
        const singleBridges = existingBridges(bridges) // removes duplicate bridges needed for two way numbers
        Object.entries(singleBridges).forEach(([key, val]) => {
            for (const bridge of val) {
                line = <line
                    className="line"
                    key={count + " line"}
                    x1={coordinates[key].x + 20}
                    y1={coordinates[key].y}
                    x2={coordinates[bridge].x + 20}
                    y2={coordinates[bridge].y}
                    style={lineStyle}
                />
                lineArray.push(line);
                count ++
            }
        })
        renderLines = lineArray.map((item) => {
            return item;
        })
    }
    return (
        <>
            {renderLines}
        </>
    )
}

export default buildLines;
