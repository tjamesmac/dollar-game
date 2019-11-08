import "./node.scss";
import React from "react";

function Node(props) {
    const { id, value } = props;

    function handleClick() {
        console.log(value);
    }
    return (
        <div id={id} className="node" onClick={handleClick}>
            {value}
        </div>
    )
}

export default Node;
