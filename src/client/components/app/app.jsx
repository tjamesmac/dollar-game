import Grid from "../grid/grid.jsx"
import React from "react";

function App() {
    const columns = 5;
    const rows = 5;
    const nodes = 5;
    return (
        <>
            <span className="bold-text">The Dollar Game!</span>
            <Grid columns={columns} rows={rows} nodes={nodes} />
        </>
    )
}

export default App;
