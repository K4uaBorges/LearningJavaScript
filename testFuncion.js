function main(){
    console.log("hello World")
    return("A soma é "+ some(5,20))
}

// @ts-ignore
function some(a,b){
    return a+b;
}

console.log(main())