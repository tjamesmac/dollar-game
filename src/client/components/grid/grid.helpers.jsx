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

    function generateRandomCoordinate() {
        function getRandomIntMinMax(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }
        const coordinates = [getRandomIntMinMax(0, rowNumber), getRandomIntMinMax(0, colNumber)]; // amount of rows - columns
        return coordinates;
    }
    function checkUniqueValues(coordinateArrayCheck) {
        const uniquePairs = pairs => [...new Set(pairs.map(pair => JSON.stringify(pair)))].map(pair => JSON.parse(pair));
        const uniqueCoordinates = uniquePairs(coordinateArrayCheck);
        console.log(uniqueCoordinates.length, nodeLength.length)
        if (uniqueCoordinates.length === nodeLength.length) {
            console.log("Coordinates complete and are unique");
            return uniqueCoordinates;
        } else {
            console.log("not unique");
            // generate coordinate
            const extraCoordinates = generateRandomCoordinate();
            console.log(extraCoordinates);
            // push into array
            uniqueCoordinates.push(extraCoordinates);
            // call checkUniqueValue(array);`
            return checkUniqueValues(uniqueCoordinates);
        }
    }

    // console.log(uniquePairs([[1,2], [1,1], [2,0], [1,2], [1,1]]));
    const coordinateArray = []; // represent
    for (const node of nodeLength) {
        // create
        const coordinates = generateRandomCoordinate();
        coordinateArray.push(coordinates);
    }
    // console.log(coordinateArray);
    const validCoordinates = checkUniqueValues(coordinateArray);
    console.log(validCoordinates, "these are the finished coordinates");
    return validCoordinates;
}





