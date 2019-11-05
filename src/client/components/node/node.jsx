import "./node.scss";
import React from "react";

function Node(props) {
    const { name } = props;

    function handleClick() {
        console.log(name);
    }
    return (
        <div className="node" onClick={handleClick}>
        </div>
    )
}

export default Node;
