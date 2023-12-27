const xmasGifts = ['guitar 🎸', 'skates ⛸️', 'bear 🧸', 'magnet 🧲', 'laptop 💻', 'games console 🎮 ', 'jewellery 💍', 'kite 🪁']

/**
 * Challenge:
 * 1. Sort the array twice. Alphabetically and reverse alphabetically.  
 **/

const sortedAZUsingSort = /* write code here */xmasGifts.sort();
console.log('A-Z: ', sortedAZUsingSort) 
//["bear 🧸", "games console 🎮 ", "guitar 🎸", "jewellery 💍", "kite 🪁", "laptop 💻", "scarf 🧣", "skates ⛸️"]

function sortAlphabetically(arr) {
  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  arr.forEach((element, i) => {
    for (let j = i + 1; j < arr.length; j++) {
      if (element > arr[j]) {
        swap(i, j);
      }
    }
  });

  return arr;
}

const sortedAZUsingforEach = sortAlphabetically(xmasGifts)
console.log('A-Z: ', sortedAZUsingforEach)

const sortedZAUsingSort = /* write code here */xmasGifts.sort((a, b) => b.localeCompare(a))
console.log('Z-A: ', sortedZAUsingSort) 
//["skates ⛸️", "scarf 🧣", "laptop 💻", "kite 🪁", "jewellery 💍", "guitar 🎸", "games console 🎮 ", "bear 🧸"]

function reverseAlphabeticalSort(arr) {
  // Create a temporary array to hold the sorted elements
  const sortedArr = [];

  // Use forEach to iterate through the original array
  arr.forEach((element) => {
    // Find the correct insertion position in the sorted array
    let i = 0;
    while (i < sortedArr.length && sortedArr[i] > element) {
      i++;
    }

    // Insert the element at the found position
    sortedArr.splice(i, 0, element);
  });

  return sortedArr;
}

const sortedZAUsingforEach = reverseAlphabeticalSort(xmasGifts)
console.log('Z-A: ', sortedZAUsingforEach)