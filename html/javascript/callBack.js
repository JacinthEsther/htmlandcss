function callMe(phoneNumber , countryDial){
    if(phoneNumber !== " "){
        countryDial(phoneNumber);
        
    }
    else{
        console.log("Enter a valid number");
    }
}

const dial =(phoneNumber) => console.log(`Calling ${phoneNumber}`)

callMe("08033245672", dial);