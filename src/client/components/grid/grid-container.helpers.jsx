export function generateGridArr(rows, columns) {
    const numOfRows = [...Array(rows).keys()];
    const grid = [];
    for (const col of columns) {
        // const rowArray = [];
        // for (const item of numOfRows) {
        //     const cell = {};
        //     cell.index = item;
        //     cell.active = false;
        //     cell.bridges = null;
        //     cell._id = null;
        //     rowArray.push(cell);
        // }
        const row = numOfRows.map((item) => {
            const cell = {};
            cell.index = item;
            cell.active = false;
            cell.bridges = null;
            cell._id = null;
            return cell;
        })
        grid.push(row);
    }
    return grid;
}

// generates random numbers between the values we want
export function generateNodeCoordinates(requirements) {
    console.log(requirements);
    const { amountOfNodes, columns, rows } = requirements;
    const coordinateArray = [];
    function generateRandomCoordinate() { // get randomised coordinate array
        function getRandomIntMinMax(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }
        const randomCoordinates = [getRandomIntMinMax(0, rows), getRandomIntMinMax(0, columns)]; // amount of rows - columns
        return randomCoordinates;
    }
    function checkUniqueValues(coordinateArrayCheck) { //
        const uniquePairs = pairs => [...new Set(pairs.map(pair => JSON.stringify(pair)))].map(pair => JSON.parse(pair)); // converts to a JSON and pushed into a set
        const uniqueCoordinates = uniquePairs(coordinateArrayCheck);

        if (uniqueCoordinates.length === amountOfNodes.length) {
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
    for (const node of amountOfNodes) {
        // create
        const coordinates = generateRandomCoordinate();
        coordinateArray.push(coordinates);
    }
    const validCoordinates = checkUniqueValues(coordinateArray);
    return validCoordinates;
}



export function getNodeCoordinates() {
    const coorObj = {};
    const nodes = document.querySelectorAll(".node");
    for (const item of nodes) {
        const id = item.getAttribute("id");
        coorObj[id] = item.getBoundingClientRect();
    }
    return coorObj;
}

export function generateRandomArray(nodeLength, numberOfBridges) { // generate random numbers between two values and should be node length
    const bridgeLength = numberOfBridges;
    const randomArray = (length, min, max) => [...new Array(length)].map(() => Math.floor(Math.random() * (max - min)) + min);
    const randomValues = randomArray(nodeLength, -9, 9);
    const totalArray = randomValues.reduce((a, b) => a + b);
    const numberCheck = nodeLength - bridgeLength + 1;
    console.log(totalArray, numberCheck);
    const positiveCheck = [];
    for (const numbder of randomValues) { // checks to make sure all values are not positive
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

export function generateBridges(nodeLength) { // returns an array of bridges between 1 - nodeLength [1, 2, 3]
    const maximumBridges = nodeLength - 1;
    function getRandomIntMinMax(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    const randomBridgeLength = getRandomIntMinMax(1, maximumBridges);
    const randomArray = (length, max) => [...new Array(length)]
        .map(() => Math.floor(Math.random() * (max)));
    const randomValues = randomArray(randomBridgeLength, nodeLength);
    const filteredArray = [...new Set(randomValues)]
    return filteredArray;
}

export function bridgeBuilder(nodeLength) {
    function bridgeValidator(index, nodeNumber) {
        let bridge = generateBridges(nodeNumber);
        // prevents node from being connected to itself
        if (bridge.includes(index)) {
            const newBridge = generateBridges(nodeNumber);
            bridge = newBridge;
            return bridgeValidator(index, nodeNumber);
        } else {
            bridgeArray.push(bridge);
        }
    }
    const bridgeArray = [];
    for (const node of nodeLength) {
        bridgeValidator(node, nodeLength.length);
    }
    return bridgeArray;
}

export function nodeConnections(bridgeArray) {
    const connectionObject = {};
    for (const [index, bridge] of bridgeArray.entries()) {
        if (!connectionObject[index]) { // if property doesn't exist
            connectionObject[index] = []; // make it
        }
        let connectionArray = connectionObject[index] // if it does exist
        for (const item of bridge) {
            connectionArray.push(item);
            if (connectionObject[item]) {
                connectionObject[item].push(index)
            } else {
                // create property to store bridge connection
                connectionObject[item] = [];
                connectionObject[item].push(index)
            }
        }
        
    }
    Object.entries(connectionObject).forEach(([key, val]) => {
        connectionObject[key] = [...new Set(val)];
    })
    console.log(connectionObject);
    return connectionObject;
}
