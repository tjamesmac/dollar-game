import GridContainer from "../grid-container/grid-container.jsx"
import React from "react";

function App() {

    return (
        <div>

            <span className="bold-text">The Dollar Game!</span>
            <GridContainer colNumber={5} rowNumber={5} nodeNumber={3} />

        </div>
    )
}

export default App;
