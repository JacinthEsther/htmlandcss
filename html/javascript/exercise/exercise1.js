pets = ["dog","cat","bird"];
// pets.splice(2,0,"pig","duck","emu");
pets.splice(2,2,"pig","duck","emu");
// console.log(pets)

newPet = ["dog", "cat", "fly", "bug", "ox"];
var noPets = newPet.slice(2,4); //to copy
// console.log(noPets);
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "]; 
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"]; 
var fullNames = []; 
    for (var i = 0; i < firstNames.length; i++) { 
        for (var j = 0; j < lastNames.length; j++) { 
    fullNames.push(firstNames[i] + lastNames[i]);

        }
        }
        console.log(fullNames);
