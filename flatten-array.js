// I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].
// Fix this incorrect code so that all tests pass!
function flatten(arr) {
  arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr2.push(arr[i][j]);
    }
  }
  return arr2;
}

// Great solution, now think of a way to flatten an array that might have multiple nested arrays.
// For example: [[1,2,3], [[4,5], [6], 7]]

// Fabricio: Solution using recursion
const exampleArr = [3, [1, 2, [], null, [null]], [[4, 5], [6, [null]], 7, [2, [5, [[[4, [[[null]]]]], 8]]]]];

function flattenMultipleDepths(arr) {
  arr2 = [];
  const checkDepth = arr => {
    arr.forEach(arrOrValue => {
      if (arrOrValue == undefined) {
        return;
      }

      if (arrOrValue[0] === undefined && Number.isInteger(arrOrValue)) {
        console.log(arrOrValue);
        arr2.push(arrOrValue);
        return;
      } else if (arrOrValue[0] && arrOrValue[0].length != 0) {
        checkDepth(arrOrValue);
      }
    });
  };
  checkDepth(arr);
  return arr2;
}

console.log(flattenMultipleDepths(exampleArr)); // => [3, 1, 2, 3, 4, 5,6, 5, 6, 9, 7, 2,5, 7, 8];
