// Question 1 -- 
// sortByStrings(s,t): Sort the letters in the string s 
// by the order they occur in the string t. You can assume 
// t will not have repetitive characters. For s = "weather"
//  and t = "therapyw", the output should be 
//  sortByString(s, t) = "theeraw". For s = "good" and t = "odg",
//   the output should be sortByString(s, t) = "oodg".

let sortByStrings = (s, t) => {
    let hash = {};
    let result = "";

    for (let letter of s) {
        if(hash[letter]) hash[letter]++
        else hash[letter] = 1
    }

    for (let letter of t) {
        if (hash[letter]) {
            result += letter.repeat(hash[letter])
        }
    }

    return result
}

sortByStrings("weather", "therapyw")