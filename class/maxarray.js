"use strict";
function maxvalue(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
const array = [1, 2, 4];
console.log(maxvalue(array));
