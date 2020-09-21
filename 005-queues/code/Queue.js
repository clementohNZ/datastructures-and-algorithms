/**
 * Adapted from https://medium.com/better-programming/implementing-a-queue-in-javascript-59b332c7ff0d
 */
class Queue {
  constructor() {
    this.data = [] // is the list in which we store our elements
    this.rear = 0 // is used to store the position in which the next element will be stored
    this.size = 10 // maximum number of elements a queue can have
  }

  /**
   * After inserting an element to the queue, we need to increase
   * the rear value by 1 so the rear points to the next position
   * where the new element will be inserted.
   *
   * We also need to check if the queue is full or not so it
   * avoids overflow.
   *
   * @param element
   */
  enqueue(element) {
    if (this.rear < this.size) {
      this.data[this.rear] = element
      this.rear = this.rear + 1
    }
  }

  /**
   * If the rear points to 0 , then we can say that the queue
   * is empty. Because the rear points to the position where
   * the new element will be placed, if the rear points to 0,
   * there’s no element in the queue.
   *
   * @returns {boolean}
   */
  isEmpty() {
    return this.rear === 0
  }

  /**
   * In addition to getting the front element, this will check
   * if the queue is empty or not.
   *
   * @returns {*}
   */
  getFront() {
    if (this.isEmpty() === false) {
      return this.data[0]
    }
  }

  /**
   * We know the rear value points the new position, where the
   * next element will be inserted into the queue. So to get
   * the last element in the queue, we can decrease the rear
   * index by 1.
   *
   * @returns {*}
   */
  getLast() {
    if (this.isEmpty() === false) {
      return this.data[this.rear - 1]
    }
  }

  /**
   * The element which is inserted first is the one that is
   * deleted first. So we can delete the front element and
   * decrease the rear value by 1 so the rear points to the
   * next position to insert correctly.
   *
   * @returns {*}
   */
  dequeue() {
    if (this.isEmpty() === false) {
      this.rear = this.rear - 1
      return this.data.shift()
    }
  }

  /**
   * Prints elements in first in first out order.
   */
  print() {
    for (let i = 0; i < this.rear; i++) {
      console.log(this.data[i])
    }
  }

  /**
   * Delete all elements of the queue and set the rear to 0.
   */
  clear() {
    this.data.length = 0;
    this.rear = 0;
  }
}
