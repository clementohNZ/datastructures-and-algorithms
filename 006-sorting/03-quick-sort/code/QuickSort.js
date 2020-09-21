/**
 * Adapted from https://medium.com/javascript-in-plain-english/quick-sort-algorithm-in-javascript-5cf5ab7d251b
 *
 * 1. Pick a pivot element that divides the list into two sub-lists.
 * We can select a random element as the pivot.
 *
 * 2. Reorder the list so that all elements less than the pivot
 * element are placed before (towards its left) the pivot and
 * all elements greater than the pivot are placed after
 * it (towards its right).
 *
 * 3. Repeat steps 1 and 2 on both the smaller and larger
 * list. That is, Recursively apply the above steps to the
 * sub-array of elements with smaller values and separately
 * to the sub-array of elements with greater values.
 */
class QuickSort {
  sort(array) {
    // Base case
    if (array.length < 2) {
      return array
    }

    const pivot = array[0]
    const lesserArray = []
    const greaterArray = []

    for (let i = 1; i < array.length; i++) {
      if (array[i] > pivot) {
        greaterArray.push(array[i])
      } else {
        lesserArray.push(array[i])
      }
    }

    return this.sort(lesserArray).concat(pivot, this.sort(greaterArray))
  }
}

const sortingAlgorithm = new QuickSort()
const arrayToSort = [6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]
const result = sortingAlgorithm.sort(arrayToSort)
console.log(result)
