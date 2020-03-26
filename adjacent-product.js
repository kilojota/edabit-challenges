// Given an array of integers, find the pair of adjacent elements that have the largest product and return that product.
function adjacentProduct(arr) {
  largestProduct = Number.NEGATIVE_INFINITY;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] * arr[i + 1] > largestProduct) {
      largestProduct = arr[i] * arr[i + 1];
    }
  }
  return largestProduct;
}
