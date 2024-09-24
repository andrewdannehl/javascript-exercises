const removeFromArray = function(arr, ...nums) {
    
    const result = arr.filter(item => !nums.includes(item));
    return result;
};


// Do not edit below this line
module.exports = removeFromArray;


