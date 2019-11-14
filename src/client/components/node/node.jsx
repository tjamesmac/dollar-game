import "./node.scss";
import React from "react";

function Node(props) {
    const { id, value } = props;

    return (
        <div id={id} className="node">
            {value}
        </div>
    )
}

export default Node;
