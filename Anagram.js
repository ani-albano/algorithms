// Funcion para determinar si dos palabras son anagramas
function isAnagram(word1, word2) {
    if(typeof word1 !== "string" || typeof word2 !== "string") {
        return false;
    }

    const lookup = {};

    /* Loop on the first string */
    for(let i = 0; i < word1.length; i++) {
        let letter = word1[i]; //if letter exist increment, otherwise, 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    /* Loop on the second */
    for(let i = 0; i < word2.length; i++) {
        let letter = word2[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

isAnagram("patata", "tapa")
