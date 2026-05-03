/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {

    let bfs = (head, min, max) => {

        if (!head)
            return true;

        console.log(head.val, min,max)
        if (head.val <= min || head.val >= max)
            return false;

        return (bfs(head.left, min, head.val) && bfs(head.right, head.val, max))
    }
    let isValidate = bfs(root, -Infinity, Infinity)
    console.log(isValidate)

    return isValidate;
};