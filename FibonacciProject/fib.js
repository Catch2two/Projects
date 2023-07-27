// State Array
/*const fibs = [0, 1]

function fib(n) {
    // Iterate over the rest of the numbers in the sequence.
    for (let i = 2; i < n; i++) {
        // Calculate the next number in the sequence.
        fibs[i] = fibs[i - 1] + fibs[i - 2]
    }
    return fibs;
}
*/
/*
 Fib seq. X is the location and shows what the number in the sequence spot 
(if x = 20, 20th spot on the Fib Seq is 6765)
 */

const fibsArray = fibs(20);

function fibRec(x) {
    if (x < 2) {
        return x;
    } else {
    return fibRec(x - 1) + fibRec(x - 2)
}
}

// Showing the Array
function fibs(n) {
    fibs = [];
    for (let i = 0; i <= n; i++) {
        fibs.push(fibRec(i));
    }
    return fibs;
}

console.log(fibRec(20))
console.log(fibsArray)

/* Bonus One Liner
const fibs = (n) => (n < 2 ? n : fibs(n - 1) + fibs(n - 2));

const fibsArray = fibs(21);

console.log(fibsArray);
*/