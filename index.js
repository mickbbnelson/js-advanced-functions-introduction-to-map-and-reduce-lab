// Your code here
function mapToNegativize(sourceArray) {
    const newArray = []
    
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * -1)
    }
    return newArray
}


function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    const newArray = []
    
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * 2)
    }
    return newArray   
}

function mapToSquare(sourceArray) {
    const newArray = []
    
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * sourceArray[i])
    }
    return newArray   
}

function reduceToTotal(numbers, startingPoint=0) {
    let total = startingPoint;

    for (const number of numbers) {
        total += number;
    };
    return total
}

function reduceToAllTrue(sourceArray) {
    let results =sourceArray.every(Boolean);
    return results
}

function reduceToAnyTrue(sourceArray) {
    let results = true;
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === true) {
            results = true;
        } else {
            results = false;
        }
    }
    return results
}