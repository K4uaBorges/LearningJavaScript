
const Number = [1, 2, 3, 4, 5];
const Names = ['Ana', 'Newton', 'Ion', 'Maria', 'Vasile'];

function main() {

    let numberPlus2 = myMap(Number, item => item + 2);
    console.log(numberPlus2);

    let namesWithLength = myMap(Names, item => item.length);
    console.log(namesWithLength);

    let namesWithA = myFilter(Names, 'a' || 'A' );
    console.log(namesWithA);

   let OraganiszedNames = myForEach(Names, names => console.log(names));
    console.log(OraganiszedNames);

}

function myForEach(array, callback) {

    for (i in array) {
        callback(array[i]);
    };

};


function myMap(array, callback) {
    
    let oldArray = array;
    array = [];

    for (i in oldArray) {
        array[i] = callback((oldArray[i]));
    }

    return array;
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



console.log(main());
