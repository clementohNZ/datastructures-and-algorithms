class BubbleSort {
  sort(array) {
    for (let i = array.length; i > 0; i--) {
      /*
      Loop through the entire array, each time stopping one element shorter
      than the previous loop. This is because we know that after each pass,
      the largest element bubbles to the top.

      Understanding this allows us to avoid trying to compare numbers that are
      already in the right positions after each pass.
       */
      for (let currentItemIndex = 0; currentItemIndex < i; currentItemIndex++) {
        const nextItemIndex = currentItemIndex + 1
        const nextItem = array[nextItemIndex]
        const currentItem = array[currentItemIndex]
        if (currentItem > nextItem) {
          array[currentItemIndex] = nextItem
          array[nextItemIndex] = currentItem
        }
      }
    }
    return array
  }
}

const bubbleSort = new BubbleSort()
const arrayToSort = [5, 3, 8, 2, 1, 4]
const result = bubbleSort.sort(arrayToSort)
console.log(result)