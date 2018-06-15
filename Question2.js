// Question 2 -- decodeString(s): Given an encoded string, 
// return its corresponding decoded string.

// The encoding rule is: k[encoded_string], 
// where the encoded_string inside the square brackets 
// is repeated exactly k times.Note: k is guaranteed 
// to be a positive integer.

// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

let decodeString = (s) => {
    let arr = s.split('');
    let len = arr.length;

    let i = 0;
    let temp = [];
    let temp1 = [];
    let temp2 = [];

    let str = '';
    let c = '';
    let p = '';

    for (i = 0; i < len; i++) {
        if (arr[i] === ']') {
            c = temp.pop();
            str = '';
            while (c !== '[') {
                str = c + str;
                c = temp.pop();
            }
            count = '';
            c = temp.pop();
            while (isDigit(c)) {
                count = c + count;
                c = temp.pop();
            }
            count = parseInt(count);
            temp.push(c);
            p = '';
            while (count > 0) {
                p = p + str;
                count--;
            }
            temp.push(p);

        } else {
            temp.push(arr[i]);
        }
    }

    return temp.join('')
};

let isLetter = (c) => {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}

let isDigit = (c) => {
    return c >= '0' && c <= '9';
}