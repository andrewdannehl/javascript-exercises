const fibonacci = function(index) {
    if (index > 2) {
        return fibonacci(index - 2) + fibonacci(index - 1);
    } else if (index == 0) {
        return 0;
    } else if (index < 0) {
        return "OOPS";
    } else {
        return 1;
    }
};

// Do not edit below this line
module.exports = fibonacci;
