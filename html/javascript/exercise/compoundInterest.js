function compoundInterest(principal,rate,number,time){
    let amount= (principal * Math.pow((1 + (rate/number)),(number * time)));
    return principal + amount;
}

console.log(compoundInterest(20000,5,2,2))