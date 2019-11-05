import Node from "../node/node.jsx"
import React from "react";

function App() {
    let a = 2;
    if (a == 2) {
        console.log(a);
    }
    return (
        <div>
            Hello world!
            <Node name="fred" />
        </div>
    )
}

export default App;
