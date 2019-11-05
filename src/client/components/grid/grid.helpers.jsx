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
// generates random numbers between the values we want
export function generateNodeCoordinates(nodeLength, rowNumber, colNumber) {
    function getRandomIntMinMax(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    const coordinateArray = []; // represent
    for (const node of nodeLength) {
        const coordinates = [getRandomIntMinMax(0, rowNumber), getRandomIntMinMax(0, colNumber)]
        if (coordinates == colNumber) {
           
        }
        coordinateArray.push(coordinates);
    }
    console.log(coordinateArray);
    return coordinateArray

}

