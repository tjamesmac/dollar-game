import Grid from "../grid/grid.jsx"
import React from "react";

function App() {

    return (
        <>
            <h1 className="bold-text">The Dollar Game!</h1>
            <Grid columns={15} rows={15} nodes={5} />
        </>
    )
}

export default App;
