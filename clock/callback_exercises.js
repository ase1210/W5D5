// addNumbers

const readline = require('readline');

const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCB) {
  if (numsLeft === 0){
    completionCB(sum);
    reader.close()
    return
  }
  // let sum = 0;
  reader.question("Enter a number to add: ", function(numString1) {
    sum += parseInt(numString1);
    console.log(sum);
    addNumbers(sum, numsLeft-1, completionCB);
  });
}

// addNumbers(0, 6, sum => console.log(`Total Sum: ${sum}`));

// absurd Bubble Sort

function absurdBubbleSort(arr, finishCB) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      finishCB(arr)
    }
  }
  outerBubbleSortLoop(true);
}

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2} (y, n)`, function(response){
    if (response === "y") {
      callback(true)
    } else {
      callback(false)
    }
  })
  // reader.close();
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length-1) {
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan){
      if (isGreaterThan) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      // } else {
      //   madeAnySwaps = false;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else if (i === (arr.length-1)) {
    outerBubbleSortLoop(madeAnySwaps)
  }
}
// askIfGreaterThan(0, 6, boolean => console.log(boolean));
// let madeAnySwaps = false;
// innerBubbleSortLoop([4,3,2,1], 0, madeAnySwaps, function(){
//   console.log("in outer bubble sort");
// });
absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});