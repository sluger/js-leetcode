/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let i = 0;
    let subStr = '';
    let maxLen = 0;
        
    while (i < s.length) {
        let dupPos = subStr.indexOf(s[i]);
        if (dupPos === -1) {
            if (subStr.length === 0) {
                start = i;
            }
            subStr = subStr + s[i]; 
            if (subStr.length > maxLen) {
                maxLen = subStr.length;
            }
            i++;
        } else {
            subStr = subStr.slice(dupPos + 1);
            start = start + dupPos;
        }
    }
    
    return maxLen;
};
