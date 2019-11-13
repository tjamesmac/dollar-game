import GridContainer from "../grid-container/grid-container.jsx"
import React from "react";

function App() {

    return (
        <React.Fragment>
            <span className="bold-text">The Dollar Game!</span>
            <GridContainer columns={15} rows={15} nodes={5} />
        </React.Fragment>
    )
}

export default App;
