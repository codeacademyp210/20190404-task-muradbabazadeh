"use strict";


function Car(carMarka,carModel,carYear){
    this.name = carMarka;
    this.model = carModel;
    this.year = carYear;
}


// let marka = document.forms["myForm"]["marka"].value;
// let model= document.forms["myForm"]["model"].value;
// let year= document.forms["myForm"]["year"].value;
// let car = new Car(marka, model, year);
// let carsArray=[]


    // carsArray.push(car);
   

    console.log(carsArray)

 
let letterPattern= /[a-zA-Z]/;
let numAndLetter = /[a-zA-Z][0-9]/;
let numberPattern = /[0-9]/;
function Validation(){
    let marka = document.forms["myForm"]["marka"].value;
 let model = document.forms["myForm"]
 console.log(model)
let year= document.forms["myForm"]["year"].value;

    if(marka==="dd"){
        alert("Enter marka.")
        return false;
    }
    if(!marka.match(letterPattern)){
    alert("Enter true marka.")
    return false;
    }
    if(model===""){
        alert("Enter model.")
        return false;
    }
    if(!model.match(numAndLetter)){
        alert("Enter true model.")
        return false;
    }
    if(year===""){
        alert("Enter year.");
        return false;
    }
    if(!year.match(numberPattern)){
        alert("Enter true year.")
        return false;
    }
    
}