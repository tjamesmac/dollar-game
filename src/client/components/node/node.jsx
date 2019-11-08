import "./node.scss";
import React from "react";

function Node(props) {

    const { id, value, clickHandler } = props;
    const [nodeValue, setNodeValue] = React.useState(5);
    
    function handleClick() {
        setNodeValue(nodeValue - 1);
        console.log(value);
        
    }
    return (
        <div id={id} className="node" onClick={clickHandler}>
            {value}
        </div>
    )
}

export default Node;
