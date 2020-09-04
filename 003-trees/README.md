# Trees

## Table of Contents

## Definitions
1. Unlike Array and Linked List, which are linear data structures, tree is hierarchical (or non-linear) data structure - [GeeksforGeeks][1].

2. What comes to your mind when you think of a tree? Roots, branches and leaves? A big oak tree with roots, branches and leaves may come to your mind. Similarly, in computer science, the tree data structure has roots, branches and leaves, but it is drawn upside-down. A tree is a hierarchical data structure which can represent relationships between different nodes - [Towards Data Science][2].

![Anatomy of a Tree](./resources/tree-structure.png)

### General properties of a tree
1. A tree can contain no nodes or it can contain one special node called the root with
zero or more subtrees.
2. Every edge of the tree is directly or indirectly originated from the root.
3. Every child has only one parent, but one parent can have many children.

## Example of tree algorithms
This is not an exhaustive list of possible tree structures.

1. Binary Search Tree is a tree that allows fast search, insert, delete on a sorted data.
It also allows finding closest item.
2. Heap is a tree data structure which is implemented using arrays and used to implement
priority queues.
3. B-Tree and B+ Tree : They are used to implement indexing in databases.
4. Syntax Tree: Used in Compilers.
5. K-D Tree: A space partitioning tree used to organize points in K dimensional space.
6. Trie : Used to implement dictionaries with prefix lookup.
7. Suffix Tree : For quick pattern searching in a fixed text.
8. Spanning Trees and shortest path trees are used in routers and bridges respectively
in computer networks.
9. General Tree
9. AVL tree
10. Red-black tree
11. Splay tree
12. Treap
13. Binary tree

## Pros and Cons

#### Benefits
- Good for storing information that naturally forms a hierarchy e.g. computer file system.
- If we organize keys in form of a tree (with some ordering e.g., BST), we can search for a given key in moderate time.

## Sources
- [GeeksforGeeks | Applications of Tree Data Structures][1]
- [Towards Data Science | 8 Useful Tree Data Structures Worth Knowing][2]

[1]: https://www.geeksforgeeks.org/applications-of-tree-data-structure/
[2]: https://towardsdatascience.com/8-useful-tree-data-structures-worth-knowing-8532c7231e8c
