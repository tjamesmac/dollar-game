import Grid from "../grid/grid.jsx"
import React from "react";

function App() {
    const columns = 15;
    const rows = 15;
    const nodes = 5
    return (
        <>
            <span className="bold-text">The Dollar Game!</span>
            <Grid columns={columns} rows={rows} nodes={nodes} />
        </>
    )
}

export default App;
