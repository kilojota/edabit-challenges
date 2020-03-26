// Create a function that takes a number step (which equals HALF the width of a square) and returns the amount of empty squares. The image shows the squares with step 1, 2 and 3. The return value is the number of cells not on a diagonal, which is 0 for the first square, 8 for the second, and 24 for the third.
function emptySq(step) {
  width = step + step;
  amountOfCells = width * width;
  amountOfCircles = width * 2;
  return amountOfCells - amountOfCircles;
}
