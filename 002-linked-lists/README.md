# Linked List

## Table of Contents

## Definitions
1. A linked list is a linear data structure, in which the elements are not stored at
contiguous memory locations (next to each other). The elements in a linked list are
linked using pointers as shown in the below image -
[GeeksforGeeks](https://www.geeksforgeeks.org/data-structures/linked-list/)

2. In computer science, a linked list is a linear collection of data elements whose order
is not given by their physical placement in memory. Instead, each element points to the
next. It is a data structure consisting of a collection of nodes which together represent
a sequence. In its most basic form, each node contains: data, and a reference (in other
words, a link) to the next node in the sequence -
[Wikipedia](https://en.wikipedia.org/wiki/Linked_list)

3. A linked list is a common data structure made of a chain of nodes in which each node
contains a value and a pointer to the next node in the chain. The head pointer points to
the first node, and the last element of the list points to null. When the list is empty,
the head pointer points to null. Linked lists can dynamically increase in size and it is
easy to insert and delete from a linked list because unlike arrays, we only need to
change the pointers of the previous element and the next element to insert or delete an
element. Linked lists are typically used to create file systems, adjacency lists, ​and
hash tables -
[edpresso](https://www.educative.io/edpresso/what-is-a-linked-list)

## Time and Space Complexity

### Singly-Linked List

| Algorithm | Average | Worst Case |
| --------- | ------- | ---------- |
| Space     | `O(n)`  | `O(n)`     |
| Access    | `O(n)`  | `O(n)`     |
| Search    | `O(n)`  | `O(n)`     |
| Insert    | `O(1)`  | `O(1)`     |
| Delete    | `O(1)`  | `O(1)`     |

### Doubly-Linked List

| Algorithm | Average | Worst Case | 
| --------- | ------- | ---------- |
| Space     | `O(n)`  | `O(n)`     |
| Access    | `O(n)`  | `O(n)`     |
| Search    | `O(n)`  | `O(n)`     |
| Insert    | `O(1)`  | `O(1)`     |
| Delete    | `O(1)`  | `O(1)`     |

## How it works

### Singly Linked List (Uni-directional)
A singly linked list is a type of linked list that is unidirectional, that is, it can be
traversed in only one direction from head to the last node (tail).

Each element in a linked list is called a node. A single node contains data and a pointer to
the next node which helps in maintaining the structure of the list.

The first node is called the head; it points to the first node of the list and helps us
access every other element in the list. The last node, also sometimes called the tail,
points to NULL which helps us in determining when the list ends.

![Singly-Linked List](./resources/singly-linked-list.png)

### Doubly Linked List (Bi-directional)
### Circular Linked List
A Doubly Linked List (DLL) contains an extra pointer, typically called previous pointer,
together with next pointer and data which are there in singly linked list.

![Singly-Linked List](./resources/doubly-linked-list.png)

## Pros and Cons

### Compared to Arrays
#### Benefits
- Dynamic size
- Ease of insertion/deletion

#### Downfalls
- Random access is not allowed. We have to access elements sequentially starting from the
first node. So we cannot do binary search with linked lists efficiently with its default
implementation. Read about it
[here](https://www.geeksforgeeks.org/binary-search-on-singly-linked-list/).
- Extra memory space for a pointer is required with each element of the list.
- Not cache friendly. Since array elements are contiguous locations, there is locality
of reference which is not there in case of linked lists.

### Doubly-Linked List (Uni-directional) compared to Singly-Linked List

#### Benefits
- A DLL can be traversed in both forward and backward direction. A Singly-linked list can
only be traversed in a forward direction.
- The delete operation in DLL is more efficient if pointer to the node to be deleted 
is given.
- We can quickly insert a new node before a given node.
- In singly linked list, to delete a node, pointer to the previous node is needed. To get
this previous node, sometimes the list is traversed. In DLL, we can get the previous
node using previous pointer.

#### Downfalls
- Every node of DLL Require extra space for an previous pointer. It is possible to implement
DLL with single pointer though (See [this](https://www.geeksforgeeks.org/xor-linked-list-a-memory-efficient-doubly-linked-list-set-1/) and
[this](https://www.geeksforgeeks.org/xor-linked-list-a-memory-efficient-doubly-linked-list-set-2/)).
- All operations require an extra pointer previous to be maintained. For example, in
insertion, we need to modify previous pointers together with next pointers. For example
in following functions for insertions at different positions, we need 1 or 2 extra steps
to set previous pointer.
