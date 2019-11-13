import "./node.scss";
import React from "react";

function Node(props) {
    const { id, value } = props;
    // const style = {
    //     height: 50 + value,
    //     width: 50 + value,
    //     minHeight: "40px",
    //     minWidth: "40px",
    //     maxHeight: "40px",
    //     maxWidth:  "40px",
    // }
    return (
        <div id={id} className="node">
            {value}
        </div>
    )
}

export default Node;
