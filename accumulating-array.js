//Create a function that takes in an array and returns an array of the accumulating sum.
function accumulatingArray(arr) {
  arr2 = [];
  sum = 0;
  arr.forEach(val => {
    arr2.push(sum + val);
    sum += val;
  });
  return arr2;
}
