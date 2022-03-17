const randomGen = (start, end)=> {
    return Math.floor (Math.random() * end)+ start;
}

console.log(randomGen(1,10));

let cohort = {
    number:9,
    name: "Tech_stuff",
    total: 31,
    isNormal: true
}

// let{number}= cohort;
// console.log(number);
// let newCohort =  cohort //spread operator
// newCohort.name = "interesting_stuff";
// console.log(newCohort.name);
// console.log(cohort.name); 

// let cohortNew = {... cohort}
// cohortNew.name = "cool_stuff";

// console.log(newCohort.name);
// console.log(cohort.name);
// console.log(cohortNew.name);

function doSomething(... params){
    return (function(){
        params.forEach((param)=>{
            console.log(`Hi ${param}`);
        })
    })()
    // console.log(params);
}

doSomething("ujay","ehi","increase","ajine")

let anArray = [1,2,3,4,5,6];
let newArray = [...anArray];
console.log(newArray);
// let anotherArray = newArray.keys((keys));
// console.log(anotherArray);

