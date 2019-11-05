export function generateGridArr(rows, columns) {
    const gridArray = [];
    for (const col of columns) {
        const rowArray = [];
        for (const item of rows) {
            const obj = {};
            obj.index = item;
            obj.active = false;
            obj.bridges = null;
            rowArray.push(obj);
        }
        gridArray.push(rowArray);
    }
    return gridArray;
}

// export function generate


