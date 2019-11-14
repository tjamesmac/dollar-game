// takes specified rows and columns
// returns an array that makes up a grid
// each cell in a row is made up of an object
// this allows insertion of 'node'
export function generateGrid(rows, columns) {
    const numOfRows = [...Array(rows).keys()];
    const numOfColumns = [...Array(columns).keys()];
    const grid = numOfColumns.map(() => {
        const row = numOfRows.map((item) => {
            const cell = {};
            cell.index = item;
            cell.active = false;
            cell.bridges = null;
            cell._id = null;
            return cell;
        })
        return row;
    })
    return grid;
}

// takes all the built bridges
// returns an int of all bridges
export function getAmountofBridges(allBridges) {
    let amountOfBridges = 0;
    for (const bridges of allBridges) {
        amountOfBridges += bridges.length;
    }
    return amountOfBridges;
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
// generate random numbers between two values and should be node length
export function generateRandomValues(nodes, numOfBridges) {
    const MIN = -9;
    const MAX = 9;
    // returns array of values between range
    const getRandomValues = (length, min, max) => [...new Array(length)].map(() => Math.floor(Math.random() * (max - min)) + min);
    const randomValues = getRandomValues(nodes, MIN, MAX);
    const addedNodeValues = randomValues.reduce((a, b) => a + b);
    const minNodeValues = nodes - numOfBridges + 1;
    console.log(addedNodeValues, minNodeValues);
    const amountOfPositives = randomValues.filter( (x) => x >= 0)
    if (amountOfPositives.length === nodes) {
        // if all numbers are positive then the game has already been won
        return generateRandomValues(nodes, numOfBridges);
    }
    // if added node values is higher than minimum required and above zero
    // game is possible
    if (addedNodeValues >= minNodeValues && addedNodeValues > 0) {
        return randomValues;
    } else {
        return generateRandomValues(nodes, numOfBridges);
    }
}
// returns an array of numbers between 1 - array.length
export function generateBridges(numOfNodes) {
    const maximumBridges = numOfNodes - 1;
    function getRandomIntMinMax(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    const randomBridges = (length, max) => [...new Array(length)]
        .map(() => Math.floor(Math.random() * (max)));
    const numOfBridges = getRandomIntMinMax(1, maximumBridges);
    const bridgeConnections = randomBridges(numOfBridges, numOfNodes);
    const uniqueBridges = [...new Set(bridgeConnections)]
    return uniqueBridges;
}

export function bridgeBuilder(nodes) {
    // validates the array of numbers doesn't include own index
    function bridgeValidator(index, numOfNodes) {
        let bridges = generateBridges(numOfNodes);
        if (bridges.includes(index)) { // prevents node from being connected to itself
            const newBridges = generateBridges(numOfNodes);
            bridges = newBridges;
            return bridgeValidator(index, numOfNodes);
        } else {
            return bridges;
        }
    }
    // returns valid bridges for each node
    const allBridges = nodes.map((index) => {
        const bridges = bridgeValidator(index, nodes.length);
        return bridges;
    })
    return allBridges;
}

// returns object that contains all possible bridges
// for each node
export function nodeBridges(allBridges) {
    const allConnections = {};
    for (const [index, bridges] of allBridges.entries()) {
        if (!allConnections[index]) { // if property doesn't exist
            allConnections[index] = []; // make it
        }
        let connection = allConnections[index] // if it does exist
        for (const item of bridges) {
            connection.push(item); // add bridge to connection
            if (allConnections[item]) {
                allConnections[item].push(index) // add to corresponding node
            } else {
                // create property to store bridge connection
                allConnections[item] = [];
                allConnections[item].push(index)
            }
        }
    }
    Object.entries(allConnections).forEach(([index, bridges]) => {
        allConnections[index] = [...new Set(bridges)];
    })
    return allConnections;
}
