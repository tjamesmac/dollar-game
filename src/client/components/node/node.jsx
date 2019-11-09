import "./node.scss";
import React from "react";

function Node(props) {

    const { id, value } = props;
    return (
        <div id={id} className="node">
            {value}
            id: {id}
        </div>
    )
}

export default Node;
