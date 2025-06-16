// function product(a,b,c){
//     return a*b*c;
// } 

const { startTransition } = require("react");

// function fun(x,y){
//     console.log (x-y);
// }
// fun(product(3,8,9),7); 


// for (let i=1; i<=10; i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000)
// }




for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}
