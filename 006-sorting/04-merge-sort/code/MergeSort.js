class MergeSort {
  sort(array) {
    // base case
    if (array.length < 2) return array;

    // recursive case
    const middleIndex = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, middleIndex);
    const secondHalf = array.slice(middleIndex);

    return this.merge(this.sort(firstHalf), this.sort(secondHalf));
  }

  merge(array1, array2) {
    let result = [];
    // By the time merge gets called on the base case, the
    // elements in the first slot of each array will be the
    // minimum value within that array. So take the minimum of
    // the two arrays and insert it into the result.
    while (array1.length && array2.length) {
      let minElem;
      if (array1[0] < array2[0]) minElem = array1.shift();
      else minElem = array2.shift();
      result.push(minElem);
    }

    // Process any left overs.
    if (array1.length) result = result.concat(array1);
    else result =result.concat(array2);

    return result;
  }
}

const sortingAlgorithm = new MergeSort()
const arrayToSort = [6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]
const result = sortingAlgorithm.sort(arrayToSort)
console.log(result)
