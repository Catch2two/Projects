// Steps
/* 


  1.  We assign the number 1 to a variable. That’s one step.

  2.  We have a loop. For each iteration of the loop, we do the following:
        Compare currentNumber to see if it is less than 10. That is 1 step.
        We then check if currentNumber is odd. That is 1 step.
        If it is then we output it to the terminal. That’s 1 step every 2 iterations.
        We increase currentNumber by 1. That is 1 step.

  3.  To exit the loop, we need to compare currentNumber one last time to see that it is not less than ten any more. That is one last step.

*/

function oddNumbersLessThanTen() {
    let currentNumber = 1;

    while (currentNumber < 10) {
        if (currentNumber % 2 !== 0) {
            console.log(currentNumber)
        }

        currentNumber += 1;
    }
}
// oddNumbersLessThanTen() = 1, 3, 5, 7, 9

function oddNumbers(maxNumber) {
    let currentNumber = 1;
  
    while (currentNumber < maxNumber) {
      if (currentNumber % 2 !== 0) {
        console.log(currentNumber);
      }
  
      currentNumber += 1;
    }
  }

  oddNumbers(56) // 1, 3, 5, 7, 9, 11, 13... and so on to 55.