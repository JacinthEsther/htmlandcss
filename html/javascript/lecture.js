// function createCharacter(){
//     let character = {
//         name: "adeola",
//         isWig: true,
//         gender: "female",
//         getName: function (){
//             return this.name
//         }
//     }
//     return character
// }

// let person = createCharacter()
// // let personName = person.getName()
// // console.log(personName)
// let personName = person.getName.bind(person) 

// let humanName = personName()
// console.log(humanName)

let person = {
    userName: "jerry",
    gender: "male",
    school: "unilag"
}

for (key in person) {
    console.log(person[key])
}

// console.log(Object.keys(person))
console.log(Object.values(person))