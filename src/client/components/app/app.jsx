import Grid from "../grid/grid.jsx"
import Node from "../node/node.jsx"
import React from "react";

function App() {
    const [coordinates, setCoordinates] = React.useState(null);
    // line = <svg height="500" width="500" style={svgStyle}>
    //     <line x1={x1} y1={5} x2="61" y2="224" style={lineStyle} />
    // </svg>
    return (
        <div>
            Hello world!
            <Grid colNumber={5} rowNumber={5} nodeNumber={5} />
            {/* {line} */}
        </div>
    )
}

export default App;
