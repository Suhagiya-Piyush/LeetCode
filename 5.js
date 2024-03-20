function longestPalindrome(s) {
    let arr = s.split('');
    let len =  Math.ceil(arr.length / 2);
    for(let i = 0; i < len; i++){
        if(arr[i] != arr[arr.length-1]){
            arr.shift();
            arr.pop();
            return arr.join("");
        }
    }
};
let str = longestPalindrome('cbbd');
console.log(str);

// function longest_palindrome(str1) {
//     let max_length = 0,
//     newStr = '';
//     function is_Palindrome(str1) {
//         let rev = str1.split("").reverse().join("");
//         let ans = 0;
//         if(str1 == rev){
//             console.log(ans += 1);
//         }
//     }
//     for (let i = 0; i < str1.length; i++) {
//         let sub_str = str1.substr(i, str1.length);
//         // console.log("1",sub_str);
//         for (let j = sub_str.length; j >= 0; j--) {
//             let sub_sub_str = sub_str.substr(0, j);
//             // console.log("2",sub_sub_str);
//             if (is_Palindrome(sub_sub_str)) {
//                 if (sub_sub_str.length > max_length) {
//                     max_length = sub_sub_str.length;
//                     // console.log("len",max_length);
//                     newStr = sub_sub_str;
//                     // console.log("Final", newStr);
//                 }
//             }
//         }
//     }return newStr;
// }

// console.log(longest_palindrome("abnoona"));
// // console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));