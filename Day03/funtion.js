function onetoN(n){
    for(let i=1; i<=n; i++ ){
        console.log(i);
    }
    console.log( )
}
onetoN(7);
onetoN(11);




function n3(a,b){
    return Math.abs(a*a*a) + Math.abs(b*b*b)   //Math.abs convert -ve number into +ve
}
console.log(n3(2,3));