import GridContainer from "../grid-container/grid-container.jsx"
import React from "react";

function App() {

    return (
        <React.Fragment>
            <span className="bold-text">The Dollar Game!</span>
            <GridContainer colNumber={5} rowNumber={5} nodeNumber={5} />
        </React.Fragment>
    )
}

export default App;
