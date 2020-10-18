/*  function charCount(str) {
    var obj = {}; // Objeto vacio para almacenar el string dividido
    for (var i = 0; i < str.length; i++) { // Iteracion sobre el string
        var char = str[i].toLowerCase(); // Pasar todo el string a lower case
        if (/[a-z0-9]/.test(char)) { // Test each character
            if (obj[char] > 0) { // If the char is in the objt
                obj[char]++; // Add one
            } else {  // Initialize 
                obj[char] = 1;1
            };
        }           
    }
    return obj;
}
console.log(charCount("This is a test")) */

function charCount(str) {
    var obj = {}; // Objeto vacio para almacenar el string dividido
    for (var char of str) { // Iteracion sobre el string
        if (isAlphaNumeric(char)) {
        char = char.toLowerCase(); // Pasar todo el string a lower case
        obj[char] = ++obj[char] || 1; // Access the corresponding value in our object || this is an else
        }           
    }
    return obj;
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && // numeric 0 - 9
       !(code > 64 && code < 91) && // upper alpha (A - Z)
       !(code > 96 && code < 123)) { // lower alpha (a - z)
           return false;
       }
       return true;
}
console.log(charCount("This is a test"))