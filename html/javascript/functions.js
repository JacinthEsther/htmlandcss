// function checkHeight(name, height) {
//     return height >= "4ft" && name + " is close to the ground" 
// }

// console.log(checkHeight("lekan", "5ft"))

const multiplier = (number) =>{
    for (let i = 0; i < 12; i++){
        // console.log(number + "*" + i + "=" + (number * i));
        console.log(`${number} * ${i} = ${number * i}`)
    }
}

function multiplication(aFunction){
    let x = 2
    aFunction(x)
}

const drinkWater = function(){
    console.log("drink water")
}

const drinkWater2 =() => {
    console.log("drink water 2")     
}

multiplication( (element) => {
    for (let i =0;i< 12; i++){
        i >= element? console.log(`{element}/${i} = ${i/element}`) : console.log(i)
    }
})

const cookFood = function(){
    return function (food) {
        return food
    }
}


const returnFunction = (aFunction) =>{
    return aFunction
}

const yetAnotherFunction = returnFunction(() =>console.log("Ekaabo"))
// yetAnotherFunction()

const toggleLight = (event, callback) => {
    switch (event){
        case "walkedIn":
            callback("Switch On");
            break;
        case "walkedOut":
            callback("Switch Off");
            break;
        default:
            console.log("Lights off")
            break;
    }
}

toggleLight("walkedIn", (data) => console.log(`lights are ${data}`))
toggleLight("walkedOut", (data) => console.log(`lights are ${data}`))
toggleLight("walkedOnWater", (data) => console.log(`lights are ${data}`))

toggleLight("walkedIn", function (data) { console.log(`lights are ${data}`)})

const food = cookFood()("beans")
console.log(food)
const testBeans = cookFood()
console.log(testBeans)
// multiplication(multiplier)