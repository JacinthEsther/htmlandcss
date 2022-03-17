// const power= function (base,exponent){
//     let result = 1;
//     for(let i = 0; i < exponent; i++){
//         result *= base;
//     }
//     return result;
// }

// console.log(power(2,10));

// const hummus = function(factor) {
//     const ingredient = function(amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//     unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//     }
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
//     };
//     hummus(2)

//     function findSolution(target) {
//         function find(current, history) {
//         if (current == target) {
//         return history;
//         } else if (current > target) {
//         return null;
//         } else {
//         return find(current + 5, `(${history} + 5)`) ||
//         find(current * 3, `(${history} * 3)`);
//         } }
//         return find(1, "1");
//         }
//         console.log(findSolution (24));
//         // → (((1 * 3) + 5) * 3)

        // let myArray = [1,2,3,4,5,6]
        // let newMyArray = myArray.shift();
        // newMyArray = myArray. pop();
        // console.log(myArray);

        let pseudoDocument={
                events : {},
                addEventListener: function(event,aFunction){
                        if(event === 'DOMContentLoaded'){
                                aFunction(this.events)
                        }
                },
        }

pseudoDocument.addEventListener('DOMContentLoaded',
function(event){console.log(event)})