let raceNumber = Math.floor(Math.random() * 2000);
let age = Math.floor(Math.random()*50);
var time = Math.random() >= 0.5;
console.log(age);
console.log(raceNumber);
console.log(time);
if(time === true && age>18){
  console.log(`Your number is ${raceNumber} and you will race at 09:30! Good luck`)
}else if(time === false && age>18){
  console.log(`Your number is ${raceNumber} and you will race at 11:00!Good luck`)
}else if(time === true || time === false && age === 18){
  console.log(`Your number is ${raceNumber} please check the front desk for information regarding the run hour! Thank you`)
}else if(time === false || time === true && age < 18){
  console.log(`Your number is ${raceNumber} you will race at 12:30! Good luck!`)
}

