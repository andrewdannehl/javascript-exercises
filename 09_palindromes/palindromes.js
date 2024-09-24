const palindromes = function (string) {
    
    //regex for all punctuation/special chars
    let newString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    //regex for all spaces
    newString = newString.replace(/\s/g, '');
    //to make it case insensitive
    newString = newString.toUpperCase();
    let reverseString = newString.split("").reverse().join("");

    if (newString == reverseString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
