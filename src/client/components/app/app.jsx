import Grid from "../grid/grid.jsx"
import Node from "../node/node.jsx"
import React from "react";

function App() {
    let a = 2;
    if (a == 2) {
      //  console.log(a);
    }
    return (
        <div>
            Hello world!
            <Node name="fred" />
            <Grid colNumber={5} rowNumber={5} nodeNumber={5} />
        </div>
    )
}

export default App;
