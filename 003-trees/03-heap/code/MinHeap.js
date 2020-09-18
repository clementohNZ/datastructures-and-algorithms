/**
 * Adapted from https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65
 */
class MinHeap {
  constructor() {
    // Initialing the array heap and adding a dummy element at index 0
    this.heap = [null]
    this.ROOT_ITEM_INDEX = 1
  }

  /**
   * Get the smallest item in the Min Heap.
   *
   * @returns {number} - smallest item in the min heap.
   */
  getMin() {
    // Accessing the min element at index 1 in the heap array
    return this.heap[this.ROOT_ITEM_INDEX]
  }

  /**
   * Insert a new node into the heap structure.
   * New node is inserted at the end of the heap. Then the new node is compared
   * to its parents to determine if it is smaller than the parent. If it's smaller,
   * it will be moved up the heap to maintain the min heap property.
   *
   * @param node {number} - new node to be inserted.
   */
  insert(node) {
    // Inserting the new node at the end of the heap array
    this.heap.push(node)

    // Finding the correct position for the new node
    // Bring the smallest element to the top of the heap.
    // Because we don't have to worry about left nodes being smaller than the right nodes
    // like a Binary Search tree, this is fairly simple to accomplish.
    if (this.heap.length > 1) {
      let currentNodeIndex = this.heap.length - 1

      // Traversing up the parent node until the current node (currentNode) is greater than the parent (current/2)
      const parentNodeIndex = Math.floor(currentNodeIndex / 2)
      const parentNodeValue = this.heap[parentNodeIndex]
      const currentNodeValue = this.heap[currentNodeIndex]

      // parentNodeValue > currentNodeValue
      // represents the min heap comparison. For max heap, it would have the opposite comparison.
      while (currentNodeIndex > 1 && parentNodeValue > currentNodeValue) {
        // Swapping the two nodes by using the ES6 destructuring syntax
        [this.heap[parentNodeIndex], this.heap[currentNodeIndex]] = [currentNodeValue, parentNodeValue]
        currentNodeIndex = parentNodeIndex
      }
    }
  }

  /**
   * Remove an item from the top of the heap. Then heapifyDown the structure to maintain
   * a min heap.
   *
   * @returns {null|*} - returns item removed from the top of the heap. If the heap is empty, null
   * is returned.
   */
  remove() {
    // Smallest element is at the index 1 in the heap array
    const smallest = this.heap[this.ROOT_ITEM_INDEX]

    // When there are more than two elements in the array, we put the right most element at the first position
    // to maintain a complete binary tree and start comparing nodes with the child nodes
    const heapHasMoreThanRootElement = this.heap.length > 2
    if (heapHasMoreThanRootElement) {
      this.heap[this.ROOT_ITEM_INDEX] = this.heap[this.heap.length - 1]
      this.heap.splice(this.heap.length - 1)

      // If there are only 2 nodes in the heap, only one comparison is needed between the first and
      // second node.
      if (this.heap.length === 3) {
        if (this.heap[this.ROOT_ITEM_INDEX] > this.heap[2]) {
          [this.heap[this.ROOT_ITEM_INDEX], this.heap[2]] = [this.heap[2], this.heap[this.ROOT_ITEM_INDEX]]
        }
        return smallest
      }

      // If there are more than 2 nodes. we traverse down the heap to find a suitable place for
      // the root node. The process of traversing down the heap is commonly called heapifyDown.
      let current = 1
      let leftChildIndex = current * 2
      let rightChildIndex = current * 2 + 1

      let leftNode = this.heap[leftChildIndex]
      let rightNode = this.heap[rightChildIndex]
      const currentNodeIsLargerThanChildren = this.heap[current] > leftNode ||
        this.heap[current] > rightNode

      while (leftNode && rightNode && currentNodeIsLargerThanChildren) {
        if (leftNode < rightNode) {
          [this.heap[current], this.heap[leftChildIndex]] = [leftNode, this.heap[current]]
          current = leftChildIndex
        } else {
          [this.heap[current], this.heap[rightChildIndex]] = [rightNode, this.heap[current]]
          current = rightChildIndex
        }

        leftChildIndex = current * 2
        rightChildIndex = current * 2 + 1
      }
    }

    // If there are only two elements in the array, we directly splice out the first element
    else if (this.heap.length === 2) {
      this.heap.splice(1, 1)
    } else {
      return null
    }

    return smallest
  }
}
