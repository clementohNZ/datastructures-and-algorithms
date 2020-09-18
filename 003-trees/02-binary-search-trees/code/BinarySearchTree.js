const Node = require('./Node')

/**
 * Adapted from https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
 */
class BinarySearchTree {
  constructor() {
    this.root = null
  }

  /**
   * Creates a new node to be inserted.
   *
   * @param data
   */
  insert(data) {
    // Creating a node and initializing
    // with data
    const newNode = new Node(data)

    // If root is null then node will
    // be added to the tree and made root.
    if (this.root === null)
      this.root = newNode
    else
      // find the correct position in the
      // tree and add the node
      this._insertNode(this.root, newNode)
  }

  /**
   * Helper method to insert a node in a tree
   * it moves over the tree to find the location
   * to insert a node with a given data.
   *
   * @param node
   * @param newNode
   */
  _insertNode(node, newNode) {
    // If the data is less than the node
    // data move left of the tree
    if (newNode.data < node.data) {
      // If left is null insert node here (base case)
      if (node.left === null)
        node.left = newNode
      else
        // if left is not null recur until
        // null is found
        this._insertNode(node.left, newNode)
    }
      // If the data is more than the node
    // data move right of the tree
    else {
      // If right is null insert node here
      if (node.right === null)
        node.right = newNode
      else
        // If right is not null recur until
        // null is found
        this._insertNode(node.right, newNode)
    }
  }

  /**
   * Remove Node with a given data.
   *
   * @param data
   */
  remove(data) {
    // Root is re-initialized with
    // root of a modified tree.
    this.root = this._removeNode(this.root, data)
  }

  /**
   * Remove node with a given data. It recurs over the tree to find the data
   * and removes it.
   *
   * @param node
   * @param data
   * @returns {null|*}
   */
  _removeNode(node, data) {
    // If the root is null then tree is
    // empty
    if (node === null)
      return null

    // If data to be delete is less than
    // roots data then move to left subtree
    else if (data < node.data) {
      node.left = this._removeNode(node.left, data)
      return node
    }

    // If data to be delete is greater than
    // roots data then move to right subtree
    else if (data > node.data) {
      node.right = this._removeNode(node.right, data)
      return node
    }

    // If data is similar to the root's data
    // then delete this node
    else {
      // Deleting node with no children
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      // Deleting node with one children
      // If a node has a left child, then we update the pointer of the parent node to the
      // left child of the node to be deleted and similarly if a node have a right child
      // then we update the pointer of the parent node to the right child of the node
      // to be deleted.
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      // Deleting node with two nodes
      // Because the right side of the binary tree is always greater than the current node's
      // value and the left side of the tree is always smaller, we need to find the next largest
      // value that is larger than the left side of the tree and smaller than the next right node.
      // The node that fits this bill is the smallest right node. We make the smallest right node
      // the current node's value and then delete that node.
      //       50     ->       50
      //      /  \    ->      /  \
      //    30   70   ->    26   70
      //   /  \       ->   /  \
      //  20  35      ->  20  35
      //      / \     ->       \
      //     26 42    ->       42
      const minRightNode = this._findMinNode(node.right)
      node.data = minRightNode.data

      node.right = this._removeNode(node.right, minRightNode.data)
      return node
    }
  }

  /**
   * Find the smallest node in a hierarchy.
   *
   * @param node
   * @returns {*}
   * @private
   */
  _findMinNode(node) {
    // If left of a node is null
    // then it must be minimum node
    if(node.left === null)
      return node;
    else
      return this._findMinNode(node.left);
  }

  /**
   * Performs inorder traversal of a tree.
   *
   * @param node
   */
  inorder(node) {
    if(node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  /**
   * Performs preorder traversal of a tree.
   *
   * @param node
   */
  preorder(node) {
    if(node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  /**
   * Performs postorder traversal of a tree.
   *
   * @param node
   */
  postorder(node) {
    if(node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  /**
   * Returns the root node of a tree.
   *
   * @returns {null}
   */
  getRootNode() {
    return this.root;
  }

  /**
   * Scans the tree to find the node with a corresponding
   * value if present.
   *
   * @param node
   * @param data
   * @returns {null|*}
   */
  search(node, data) {
    // If trees is empty return null
    if(node === null)
      return null;
    // If data is less than node's data
    // move left
    else if(data < node.data)
      return this.search(node.left, data);
    // If data is less than node's data
    // move left
    else if(data > node.data)
      return this.search(node.right, data);
    // If data is equal to the node data
    // return node (base case)
    else
      return node;
  }
}

// create an object for the BinarySearchTree
const BST = new BinarySearchTree();
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

let rootNode = BST.getRootNode()
console.log('root node:', rootNode);
console.log('------------')
console.log('in order:');
BST.inorder(rootNode)
console.log('------------')
console.log('pre order:');
BST.preorder(rootNode)
console.log('------------')
console.log('post order:');
BST.postorder(rootNode)

// Removing node with no children
console.log('-----------remove node with no children---------------')
BST.remove(5);


//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17


rootNode = BST.getRootNode();
BST.inorder(rootNode)

// Removing node with one child
console.log('-----------remove node with one child---------------')
BST.remove(7);

//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17


rootNode = BST.getRootNode();
BST.inorder(rootNode)

// Removing node with two children
console.log('-----------remove node with two children---------------')
BST.remove(15);

//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27

rootNode = BST.getRootNode();
BST.inorder(rootNode)
