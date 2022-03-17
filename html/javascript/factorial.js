function factorial(x){
    if(x===0){
        return 1;
    }
    else{
        return x * factorial(x-1);
        // first iteration 
        // 3 * factorial(3-1)
        // second iteration
        // 3 * 2 * factorial(2-1)
        // third iteration
        // 3 * 2 * 1 * factorial(1-1)
    }
}

const num = 3;

if(num > 0){
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`)
}

let pseudo={
    anArray: [1,2,3,4,5,6,7,8],
    pseudoForEach:function(iterator){
        for (let i = 0; i < this.anArray.length; i++){anArray}{
            iterator(this.anArray[i]);
        }
    }
}
pseudo.pseudoForEach((value) => value % 2 === 0 && process.stdout.write(value + " ")) 