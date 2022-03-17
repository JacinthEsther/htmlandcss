for (var i = 1; i < 20; i++){
    if (i % 3 === 0) console.log("i%3"+"Fizz"+ i);
    console.log()
    if(i % 5 === 0) console.log("i%5"+"Buzz"+ i);
    console.log()
    if(i % 5===0 && i % 3===0) console.log("i%3 %3"+"FizzBuzz")
}