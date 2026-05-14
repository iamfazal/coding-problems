// iamfazal

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let n = matrix?.length;

    // Transpose matrix
    for (let col = 0; col < n; col++) {
        for (let row = col; row < n; row++) {
            [matrix[col][row], matrix[row][col]] = [
                matrix[row][col],
                matrix[col][row],
            ];
        }
    }

    // Reverse each row (90° clockwise)
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};
