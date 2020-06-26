/**
 * sort array by odd numbers and even numbers
 * @param {*} arrayToPass 
 */
exports.sortNumbers = (arrayToPass) => {
  let oddnumbers = [];
  let evennumbers = [];
  let result = [];

  for (let i = 0; i < arrayToPass.length; i++) {
    if (!arrayToPass[i] && arrayToPass[i] !== 0)
      return "Input is not valid , Please provide valid input";

    if (arrayToPass[i] % 2 === 0) {
      evennumbers.push(arrayToPass[i]);
    } else {
      oddnumbers.push(arrayToPass[i]);
    }
  }

  oddnumbers = quickSort(oddnumbers, 0, oddnumbers.length - 1);
  evennumbers = quickSort(evennumbers, 0, evennumbers.length - 1);
  result = oddnumbers.concat(evennumbers);
  return result;
};

function swap(items, leftIndex, rightIndex) {
  [items[leftIndex], items[rightIndex]] = [items[rightIndex], items[leftIndex]];
}

function partition(items, i, j) {
  //middle element
  let pivot = items[Math.floor((i + j) / 2)];
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}

// Permutation of number or characters.
const permute = (array) => {
  let check = [];
  array.forEach(element => {
    if (!element) {
      check.push("Input is not valid , Please provide valid input");
    }
  });

  if (check.length) {
    return check;
  }

  Array.prototype.swap = function (index, otherIndex) {
    let valueAtIndex = this[index];
    this[index] = this[otherIndex];
    this[otherIndex] = valueAtIndex;
  };

  let result = [array.slice()];
  let length = array.length;

  for (let i = 1, heap = new Array(length).fill(0); i < length;) {
    if (heap[i] < i) {
      array.swap(i, i % 2 && heap[i]);
      result.push(array.slice());
      heap[i]++;
      i = 1;
    } else {
      heap[i] = 0;
      i++;
    }
  }
  return result;
};

exports.findPermutation = (input) => {
  let result = permute(input);
  return Array.from(new Set(result.map(JSON.stringify)), JSON.parse);
};
