# Stacks

## Table of Contents
- [Definition](#definition)
- [Time and Space Complexity](#time-and-space-complexity)
- [Operations](#operations)
- [Sources](#sources)

## Definition
A stack is an Abstract Data Type (ADT), commonly used in most programming languages. It
is named stack as it behaves like a real-world stack, for example – a deck of cards or
a pile of plates, etc.

A real-world stack allows operations **at one end only**. For example, we can place or
remove a card or plate from the top of the stack only. Likewise, Stack ADT allows
all data operations **at one end only**. At any given time, we can only access the top
element of a stack.

This feature makes it LIFO data structure. LIFO stands for Last-in-first-out. Here,
the element which is placed (inserted or added) last, is accessed first. In stack
terminology, insertion operation is called PUSH operation and removal operation
is called POP operation.

A stack can be implemented by means of Array, Structure, Pointer, and Linked List.

Stack can either be a fixed size one or it may have a sense of dynamic resizing.

Stack is said to be in Overflow state when it is completely full and is said to be in
Underflow state if it is completely empty.

![Stack](./resources/stack-representation.jpg)

## Time and Space Complexity

| Algorithm | Average     | Worst Case |
| --------- | -------     | ---------- |
| Space     | `O(n)`      | `O(n)`     |
| Access    | `O(n)`      | `O(n)`     |
| Search    | `O(n)`      | `O(n)`     |
| Insert    | `O(1)`      | `O(1)`     |
| Delete    | `O(1)`      | `O(1)`     |

## Operations
Stack operations may involve initializing the stack, using it and then de-initializing
it. Apart from these basic stuffs, a stack is used for the following two primary
operations:

* `push()` − Pushing (storing) an element on the stack.
* `pop()` − Removing (accessing) an element from the stack.

To use a stack efficiently, we need to check the status of stack as well. For the same
purpose, the following functionality is added to stacks:

* `peek()` − get the top data element of the stack, without removing it.
* `isFull()` − check if stack is full.
* `isEmpty()` − check if stack is empty.

## Sources
- [GeeksforGeeks | Stack Data Structure][1]
- [Tutorials Point | Data Structure and Algorithms - Stack][2]
- [Study Tonight | What is Stack Data Structure?][3]

[1]: https://www.geeksforgeeks.org/stack-data-structure/
[2]: https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm
[3]: https://www.studytonight.com/data-structures/stack-data-structure
