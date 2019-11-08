export function generateGridArr(rows, columns) {
    const gridArray = [];
    for (const col of columns) {
        const rowArray = [];
        for (const item of rows) {
            const obj = {};
            obj.index = item;
            obj.active = false;
            obj.bridges = null;
            obj._id = null;
            rowArray.push(obj);
        }
        gridArray.push(rowArray);
    }
    return gridArray;
}

// generates random numbers between the values we want
export function generateNodeCoordinates(nodeLength, rowNumber, colNumber) {
    const coordinateArray = [];
    function generateRandomCoordinate() { // get randomised coordinate array
        function getRandomIntMinMax(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }
        const randomCoordinates = [getRandomIntMinMax(0, rowNumber), getRandomIntMinMax(0, colNumber)]; // amount of rows - columns
        return randomCoordinates;
    }
    function checkUniqueValues(coordinateArrayCheck) { //
        const uniquePairs = pairs => [...new Set(pairs.map(pair => JSON.stringify(pair)))].map(pair => JSON.parse(pair)); // converts to a JSON and pushed into a set
        const uniqueCoordinates = uniquePairs(coordinateArrayCheck);

        if (uniqueCoordinates.length === nodeLength.length) {
            return uniqueCoordinates;
        } else {
            // generate coordinate
            const extraCoordinates = generateRandomCoordinate();

            // push into array
            uniqueCoordinates.push(extraCoordinates);

            // call checkUniqueValue(array);
            return checkUniqueValues(uniqueCoordinates);
        }
    }
    for (const node of nodeLength) {
        // create
        const coordinates = generateRandomCoordinate();
        coordinateArray.push(coordinates);
    }
    const validCoordinates = checkUniqueValues(coordinateArray);
    return validCoordinates;
}

export function generateBridges(nodeLength) { // returns an array of bridges between 1 - nodeLength [1, 2, 3]
    const maximumBridges = nodeLength - 1;
    function getRandomIntMinMax(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    const randomBridgeLength = getRandomIntMinMax(1, maximumBridges);
    const randomArray = (length, max) => [...new Array(length)]
        .map(() => Math.floor(Math.random() * (max - 1)) + 1);
    const randomValues = randomArray(randomBridgeLength, nodeLength);
    const filteredArray = [...new Set(randomValues)]
    return filteredArray;
}

export function getNodeCoordinates() {
    const coorArr = [];
    const nodes = document.querySelectorAll(".node");
    for (const item of nodes) {
        const pos = item.getBoundingClientRect();
        coorArr.push(pos);
    }
    return coorArr;
}

export function generateRandomArray(nodeLength, numberOfBridges) { // generate random numbers between two values and should be node length
    const bridgeLength = numberOfBridges;
    const randomArray = (length, min, max) => [...new Array(length)].map(() => Math.floor(Math.random() * (max - min)) + min);
    const randomValues = randomArray(nodeLength, -9, 9);
    const totalArray = randomValues.reduce((a, b) => a + b);
    const numberCheck = nodeLength - bridgeLength + 1;
    console.log(totalArray, numberCheck, "Total number in the array, >= numberofnodes - brides + 1");
    const positiveCheck = [];
    for (const numbder of randomValues) {
        if (numbder >= 0) {
            positiveCheck.push(numbder)
        }
    }
    if (positiveCheck.length === nodeLength) {
        return generateRandomArray(nodeLength, numberOfBridges);
    }
    if (totalArray >= numberCheck && totalArray > 0) {
        return randomValues;
    } else {
        return generateRandomArray(nodeLength, numberOfBridges);
    }
}





