"use strict"
const hourHand=document.querySelector(".hourHand");
const minuteHand=document.querySelector(".minuteHand");
const secondHand=document.querySelector('.secondHand');

setInterval(getTime,1000);

function getTime(){
    const date= new Date();
    const secondRatio=date.getSeconds()/60;
    const minuteRatio=(secondRatio+date.getMinutes())/60;
    const hourRatio=(minuteRatio+date.getHours())/12;
    console.log(date.getMinutes());
    


    rotation(secondHand,secondRatio);
    rotation(minuteHand,minuteRatio);
    rotation(hourHand,hourRatio);
    console.log("getTime");

    getDate(date);
   
}

function rotation(element,rotation){
element.style.setProperty("--rotation",rotation*360);

console.log("rotation");
}

getTime();

console.log("global");

function getDate(date){
    const year= date.getFullYear();

    const monthInNumber=date.getMonth()+1;


    const nthDayOfMonth=date.getDate();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const nthDayInWeek =date.getDay();
    const day=days[nthDayInWeek];

    showDate(day,nthDayOfMonth,year,monthInNumber)
}


function showDate(dayParameter,nthDayOfMonthParameter,yearParameter,monthInNumberParameter){
document.querySelector(".date").textContent=dayParameter+nthDayOfMonthParameter+".";
document.querySelector(".year").textContent=yearParameter+".";
highLightMonth(monthInNumberParameter);
}

function highLightMonth(monthInNumberP){
document.querySelector(`.month${monthInNumberP}`).style.cssText = `color:#FF3700;
font-weight: bold;
text-decoration: underline;
`; //with template literals i can write multiline
}