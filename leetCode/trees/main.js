class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    static buildTree(array) {
        if (array.length === 0) return null;

        const root = new TreeNode(array[0]);
        const queue = [root];

        for (let i = 1; i < array.length; i += 2) {
            const current = queue.shift();
            const leftVal = array[i];
            const rightVal = array[i + 1];

            if (leftVal !== null && leftVal !== undefined) {
                current.left = new TreeNode(leftVal);
                queue.push(current.left);
            }

            if (rightVal !== null && rightVal !== undefined) {
                current.right = new TreeNode(rightVal);
                queue.push(current.right);
            }
        }

        return root;
    }
}


const excercises = {
    isSameTree(p, q) {
        function TreeNode(val, left, right) {
            this.val = (val === undefined ? 0 : val)
            this.left = (left === undefined ? null : left)
            this.right = (right === undefined ? null : right)
        }
        if (!p && !q) {
            return true; // Ambos son nulos, por lo tanto, son iguales
        }
        // Verificar si solo uno de los nodos es nulo
        if (!p || !q) {
            return false; // Solo uno de los nodos es nulo, por lo tanto, no son iguales
        }
        // Verificar si los valores de los nodos son diferentes
        if (p.val !== q.val) {
            return false; // Los valores de los nodos son diferentes, por lo tanto, no son iguales
        }
        // Llamada recursiva para verificar los subárboles izquierdo y derecho
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}

const tree1 = TreeNode.buildTree([1, 2, 3]);
const tree2 = TreeNode.buildTree([1, 2, 3]);

console.log(excercises.isSameTree(tree1, tree2)); // Output: true
