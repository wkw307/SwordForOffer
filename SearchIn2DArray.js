/*  从矩阵中找出是否有目标值
 *  矩阵有序
 *  思路：最后一行是每一列的最大值，若最后一行的值大于目标值，则目标值可能出现于该列之后（包括该列）
 *  第一行是每一列的最小值，若第一行的值大于目标值，则目标值可能出现于该列之前（不包括该列）
 *  对缩小范围后的矩阵进行遍历，按列循环，每一列可用二分查找
 * */
function Find(target, array) {
    // write code here
    row = array.length;
    column = array[0].length;

    var tag = -1;
    var tag1 = -1;
    for (var i = 0; i < column; i++) {
        if (array[row - 1][i] >= target) {
            tag = i;
            break;
        }
    }
    if (tag == -1) {
        return false;
    }
    for (var i = 0; i < column; i++) {
        if (array[0][i] > target) {
            tag1 = i;
            break;
        }
    }
    if (tag1 == -1) tag1 = column;
    for (var j = 0; j < row; j++) {
        for (var i = tag; i < tag1; i++) {
            if (array[j][i] == target) {
                return true;
            }
        }
    }
    return false;
}