import Grid from "../grid/grid.jsx"
import React from "react";

function App() {
    const columns = 15;
    const rows = 15;
    const nodes = 5
    return (
        <>
            {/* <h1 className="bold-text">The Dollar Game!</h1> */}
            <Grid columns={columns} rows={rows} nodes={nodes} />
        </>
    )
}

export default App;
