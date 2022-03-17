let unlimitedNumber = (... args)=> {
return args.reduce((total,number) => (total + number))
}

console.log(unlimitedNumber(1,2,3,10));