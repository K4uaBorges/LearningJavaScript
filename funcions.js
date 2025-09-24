
Number = [1, 2, 3, 4, 5];
Names = ['Ana', 'Newton', 'Ion', 'Maria', 'Vasile'];


function myForEach(array) {
    for (let i in array) {
        console.log(array[i]);
    };
};


function myMap(array, callback) {
    let oldArray = array;
    array = [];
    for (let i in oldArray) {
        array[i] = callback(oldArray[i]);
    }
    return array;
}

//myForEach(array => console.log(array));

function someArrayFor2(a) {
    return a + 2;
}


function myFilter(array, element) {
    let oldArray = array;
    array = []
    for (let i in oldArray) {
        if (predicate(oldArray[i], element)) {
            array.push(oldArray[i]);
        }
    }
    return array;
}

function predicate(objectInFilter, element) {

    let FalseOrTrue = false;

        for (let i in objectInFilter) {
            if (objectInFilter[i] == element) {
                return FalseOrTrue = true;
            }
        }

        return FalseOrTrue;
    }



//console.log(myMap(Number, someArrayFor2));
console.log(myFilter(Number, 2));
//console.log(myForEach(Number));