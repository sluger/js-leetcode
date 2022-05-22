/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let i = 0;
    x = String(x);
    while (i < x.length - i) {
        if (x[i] !== x[x.length-1-i]) {
            return false;
        }
        i++;
    }
    return true;
};
