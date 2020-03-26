// Create a function that takes an array of increasing letters and return the missing letter.
function missingLetter(arr) {
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  startingIndex = alphabet.indexOf(arr[0].toLowerCase());
  newAlphabet = alphabet.splice(startingIndex);
  console.log(arr);
  for (i = 0; i < newAlphabet.length; i++) {
    console.log(newAlphabet[i], arr[i]);
    if (newAlphabet[i].toLowerCase() != arr[i].toLowerCase()) {
      return arr[i] == arr[i].toUpperCase() ? newAlphabet[i].toUpperCase() : newAlphabet[i];
    }
  }
}
