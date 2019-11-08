import "./node.scss";
import React from "react";

function Node(props) {
    const [nodeValue, setNodeValue] = React.useState(getRandomInt(10));
    const { id } = props;

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
    }

    function handleClick() {
        console.log(nodeValue);
    }
    return (
        <div id={id} className="node" onClick={handleClick}>
            {nodeValue}
        </div>
    )
}

export default Node;
