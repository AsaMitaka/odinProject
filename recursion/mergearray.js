const merge = (left, right) => {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
};

const mergeSort = (arr) => {
  const halfArray = arr.length / 2;

  if (arr.length < 2) {
    return arr;
  }

  const left = arr.splice(0, halfArray);

  return merge(mergeSort(left), mergeSort(arr));
};

let arr = [3, 5, 6, 7, 10, 1, 2, 3];
console.log(mergeSort(arr));
