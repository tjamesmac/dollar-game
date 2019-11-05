import "./grid.scss";
import React from "react";

function Grid(props) {
    const { rowNumber, colNumber } = props;
    const row = [...Array(rowNumber).keys()];
    const col = [...Array(colNumber).keys()];
    const rowDivs = row.map((item, index) => {
        return (
            <div className="row" key={index}>{index}</div>
        )
    });
    const colDivs = col.map((item, index) => {
        return (
            <div className="col" key={index}>
                {rowDivs}
            </div>
        )
    })
    return(
        <div className="grid-container">
            {colDivs}
        </div>
    )
}

export default Grid;
