class InsertionSort {
  /**
   * The code for insertion sort has two indices, i and j. i tracks
   * our outer loop and represents the current element we are sorting.
   * It starts at 1 instead of 0 because when we only have one element
   * in our newly sorted array, there is nothing to sort. Therefore,
   * we start at the second element and compare it against the first.
   * The second index, j, starts at i-1 and iterates from right-to-left
   * until it finds the correct location to place the element. Along
   * the way, we move each element over by one to make room for the
   * new element being sorted.
   *
   * This algorithm could be extended to take in objects that implement
   * something like java's Comparable interface so it can sort more
   * complex objects.
   *
   * @param {number[]} array - array to be sorted.
   * @returns {number[]} - sorted array.
   */
  sort(array) {
    for (let i = 1; i < array.length; i++) {
      let j = i - 1
      let tmp = array[i]
      while (j >= 0 && array[j] > tmp) {
        array[j + 1] = array[j]
        j--
      }
      array[j + 1] = tmp
    }
    return array
  }
}

const sortingAlgorithm = new InsertionSort()
const arrayToSort = [6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]
const result = sortingAlgorithm.sort(arrayToSort)
console.log(result)
