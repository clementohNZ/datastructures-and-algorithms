/**
 * Adapted from https://medium.com/better-programming/implementing-a-stack-in-javascript-73d1aa0483c1
 */
class Stack {
  constructor() {
    this.data = []
    this.top = 0
  }

  /**
   * When we push an element to the stack, we have to store it in the
   * top position of data and need to increment the top variable so
   * that the top will point to the next empty place.
   *
   * @param element
   */
  push(element) {
    this.data[this.top] = element
    this.top = this.top + 1
  }

  /**
   * To get the length of the stack, we can return the top value.
   *
   * @returns {number}
   */
  length() {
    return this.top
  }

  /**
   * To get the peek element of the stack, we can use the top-1
   * attribute of Stack class:
   *
   * In above code we used top-1 because the top points to the
   * position where the new element is to be inserted, therefore
   * the top empty location.
   *
   * @returns {*}
   */
  peek() {
    return this.data[this.top - 1]
  }

  /**
   * If the value of the top is equal to 0 then there is no
   * element in the Stack.
   *
   * @returns {boolean}
   */
  isEmpty() {
    return this.top === 0
  }

  /**
   * When we pop an element from the stack, we have to remove the
   * element in the top position of data and need to decrement
   * the top variable so that the top will point to the previous
   * element’s position.
   *
   * @returns {*}
   */
  pop() {
    this.top = this.top - 1
    return this.data.pop() // removes the last element
  }

  /**
   * Print the stack in last in first out order.
   */
  print() {
    let top = this.top - 1 // because top points to index where new element to be inserted
    while (top >= 0) { // print upto 0th index
      console.log(this.data[top])
      top--
    }
  }

  /**
   * Return a reversed Stack.
   *
   * @returns {any[]}
   */
  reverse() {
    return this.data.reverse()
  }

}
