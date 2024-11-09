"use strict";
function getelement(array) {
    return array[0];
}
let ans = getelement([1, 2, 3]);
console.log(ans);
// function getfirstelement(array:Inputt){
//     return array[0];
// }
// let ans1=getfirstelement(["hi","bye","tata"]);
// console.log(ans1);
// here came up with other problem which is if we want to convert ans1 to lower case it gives error because the ans may be number or string
// to over come this we generics
function getfirstelement(array) {
    return array[0];
}
let ans1 = getfirstelement(["hi", "bye", "tata"]);
console.log(ans1.toLowerCase());
