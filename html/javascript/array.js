let anArray = [1,2,3,4,5,6,7,8]

function getEvenNumbers(anArray) {
    for(let i = 0; i < anArray.length; i++){
        if(anArray[i] % 2 === 0){
            // console.log(anArray[i]);
            process.stdout.write(anArray[i] + " ");
        }
    }
}

// getEvenNumbers(anArray)
(function oneLine(anArray) {for(let i=0;i<anArray.length;i++) {anArray[i]%2 ===0 &&
    process.stdout.write(anArray[i] + " ") }})([1,2,3,4,5,6,7,8])
// ([1,2,3,4,5,6,7,8]).forEach(element => element %2===0 ? console.log(element): "");

    
