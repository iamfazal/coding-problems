// iamfazal

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let row = matrix?.length;
    let col = matrix?.[0]?.length;

    let left = 0,
        right = col - 1;
    let top = 0,
        bottom = row - 1;

    let result = [];

    while (left <= right && top <= bottom) {
        // left to right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // top to bottom
        for (let t = top; t <= bottom; t++) {
            result.push(matrix[t][right]);
        }
        right--;

        // right to left
        if (top <= bottom) {
            for (let r = right; r >= left; r--) {
                result.push(matrix[bottom][r]);
            }
            bottom--;
        }

        // bottom to top
        if (left <= right) {
            for (let b = bottom; b >= top; b--) {
                result.push(matrix[b][left]);
            }
            left++;
        }
    }

    return result;
};
