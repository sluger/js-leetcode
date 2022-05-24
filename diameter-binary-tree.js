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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    
    function traverse(n) {
        if (n === null) {
            return 0; // break
        }
        
        const left = traverse(n.left);
        const right = traverse(n.right);
        
        diameter = Math.max(diameter, left + right);
        return Math.max(left, right) + 1;
    }
    
    traverse(root);
    
    return diameter;
};
