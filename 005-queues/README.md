# Queues

## Table of Contents
- [Definition](#definition)
- [Time and Space Complexity](#time-and-space-complexity)
- [Operations](#operations)
- [Sources](#sources)

## Definition
Queue is an abstract data structure, somewhat similar to Stacks. Unlike stacks, a queue
is open at both its ends. One end is always used to insert data (enqueue) and the other
is used to remove data (dequeue). Queue follows First-In-First-Out methodology, i.e.,
the data item stored first will be accessed first.

![Queue Example](./resources/queue-example.jpg)

A real-world example of queue can be a single-lane one-way road, where the vehicle enters
first, exits first. More real-world examples can be seen as queues at the ticket
windows and bus-stops.

## Time and Space Complexity

| Algorithm | Average     | Worst Case |
| --------- | -------     | ---------- |
| Space     | `O(n)`      | `O(n)`     |
| Access    | `O(n)`      | `O(n)`     |
| Search    | `O(n)`      | `O(n)`     |
| Insert    | `O(1)`      | `O(1)`     |
| Delete    | `O(1)`      | `O(1)`     |

## Operations
Queue operations may involve initializing or defining the queue, utilizing it, and
then completely erasing it from the memory. Here we shall try to understand the basic
operations associated with queues:

* `enqueue()` − add (store) an item to the queue.
* `dequeue()` − remove (access) an item from the queue.

Few more functions are required to make the above-mentioned queue operation efficient.
These are:

* `peek()` − Gets the element at the front of the queue without removing it.
* `isfull()` − Checks if the queue is full.
* `isempty()` − Checks if the queue is empty.

## Sources
- [Tutorials Point | Data Structure and Algorithms - Queue][1]

[1]: https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm
