# Binary Tree

## Table of Contents
- [Definitions](#definitions)
- [Representation](#representation)
- [Sources](#sources)

## Definitions
1. In computer science, a binary tree is a tree data structure in which each node has
**at most two children**, which are referred to as the left child and the right child -
[Wikipedia][1].

2. A tree whose elements have at most 2 children is called a binary tree. Since each
element in a binary tree can have only 2 children, we typically name them the left and
right child - [GeeksforGeeks][2].

## Representation

```typescript
class Node {
  constructor(public data: number, public left: Node, public right: Node)
}
```

![Binary Tree Representation](./resources/binary-tree-representation.png)

## Sources
- [Wikipedia | Binary tree][1]
- [GeeksforGeeks | Binary Tree Data Structure][2]
- [Programiz | Types of Binary Trees][3]

[1]: https://en.wikipedia.org/wiki/Binary_tree
[2]: https://www.geeksforgeeks.org/binary-tree-data-structure/
[3]: https://www.programiz.com/dsa/binary-tree
