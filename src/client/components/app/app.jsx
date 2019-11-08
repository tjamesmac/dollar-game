import Grid from "../grid/grid.jsx"
import React from "react";

function App() {

    return (
        <div>

            <span className="bold-text">The Dollar Game!</span>
            <Grid colNumber={10} rowNumber={10} nodeNumber={3} />

        </div>
    )
}

export default App;
