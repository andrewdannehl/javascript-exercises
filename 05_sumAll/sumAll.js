const sumAll = function(num1, num2) {
    //we need the difference of num2-num1
        //gives us the number of times to iterate
    //return the total sum
    let startNum = 0;
    let total = 0;
    if (Number.isInteger(num1) && Number.isInteger(num2) && num1 >= 0 && num2 >= 0) {
        let len = Math.abs(num2 - num1);
        if (num1 > num2) {
            startNum = num2;
        } else {
            startNum = num1;
        }
        for (let i = 0; i <= len; i++) {
            total += startNum + i;
        }
        return total;
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
