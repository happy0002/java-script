/*
a = 1
b = 2
a-b = -1
a = -1
b = 3
a-b = -4
*/


arr = [1,2,3,4,6];
console.log(arr);
let x = arr.reduce(function (a,b){
    return a-b;
})
console.log(x);