// let arr = [3,2,3,5,8,1,7,9,91];
// console.log(arr);
// arr = arr.sort();
// console.log(arr)


// let arr = [3,2,3,5,8,1,7,9  ];
// console.log(arr);
// arr = arr.sort((a,b)=>a-b);
// console.log(arr);


// let arr = [3,2,-3,5,8,1,7,-9  ];
// console.log(arr);
// arr = arr.sort((a,b)=>b-a);
// console.log(arr);



let arr = [3,2,-3,5,8,1,7,-9  ];
console.log(arr);
arr = arr.sort((a,b)=> Math.abs(a) - Math.abs(b));
console.log(arr);