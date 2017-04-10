// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(){
    if (a > b) {
        return a
    } else {
        return b 
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    if (a >= b) {
        if (a >= c){
         return a   
        }
    }  
    if (b >= a) {
        if (b >=a) {
         return b
        }
    } 
    return c
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    var vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.indexOf(char) !==1
    for (var i =0; i < vowels.length; i += 1) {
    	if (char == vowels[1]) {
    		return true
    	}
    }
    return false
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
function isConsonant(char) {
    var consonants = "bcdfghjklmnpqrstvwxyz"
    char = char.toLowerCase()
    return consonants.indexOf(char) !== -1
}
function rovarspraket(phrase){
    var newStr = ""
    for (var i = 0; i < phrase.length; i += 1) {
        if (isConsonant(phrase[i])) {
            newStr += phrase.charAt() + 'o' + phrase.charAt(i)
        } else {
            newStr += phrase.charAt(i)
        }
    }
    return newStr
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
    var newStr=""
    for (var i = str.length -1; i >=0; i -= 1) {
        newStr += str[1]
    }
    return newStr
}