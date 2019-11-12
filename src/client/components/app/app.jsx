import GridContainer from "../grid-container/grid-container.jsx"
import React from "react";

function App() {

    return (
        <div>

            <span className="bold-text">The Dollar Game!</span>
            <GridContainer colNumber={10} rowNumber={10} nodeNumber={5} />

        </div>
    )
}

export default App;
