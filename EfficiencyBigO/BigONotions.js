/*
"Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. 
Space complexity includes both Auxiliary space and space used by input."
*/
// No matter the arguments we enter when we call the function, only two variables are created. It doesn’t change.
function multiply(num1, num2) {
    return num1 * num2;
}



// O(N) - Linear Complexity
// When the running time of an algorithm increases linearly with the size of the input.
function sumArr(arr) {
    const copyArr = arr.slice();
    let sum = 0;
    copyArr.forEach((number) => {
        sum += number;
    });
    return sum;
}

// Another O(N) Example, Object size increases, space it uses grows linearly
 function sumObjValues(obj) {
    const copyObj = { ...obj };
    let sum = 0;
    Object.values(copyObj).forEach((value) => {
        sum += value
    });
    return sum;
 }