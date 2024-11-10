var a = 9;
console.log(a);
function greet(user) {
    console.log("Hello ".concat(user));
}
greet(9);
var sum = function (a, b) {
    return a + b;
};
console.log(sum(1, 2));
var age = 10;
var isLegal = function (age) {
    return age > 18;
};
console.log(isLegal(age));
// run after 2 second
function runafterse(fn) {
    setTimeout(fn, 1000);
}
runafterse(function () {
    console.log("hello praneeth");
});
