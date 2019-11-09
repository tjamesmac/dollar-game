import "./node.scss";
import React from "react";

function Node(props) {

    const { id, value, clickHandler } = props;
    function handleClick(ID, VAL) {
        console.log(VAL, "VAL")
        console.log(ID, "ID")
        clickHandler(ID, VAL);
        // setNodeValue(nodeValue - 1);
    }

    return (
        // <div id={id} className="node" onClick={() => clickHandler(id, value)}>
        // <div id={id} className="node" onClick={() => handleClick(id, value)}>
        <div id={id} className="node">
            {value}
        </div>
    )
}

export default Node;
