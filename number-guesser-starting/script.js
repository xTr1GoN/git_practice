let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
 return Math.floor(Math.random()*10);
}
console.log(generateTarget());

const compareGuesses = (human,computer,target) => {
generateTarget();

let humanDif = Math.abs(target-human);
let compDif = Math.abs(target-computer);
if ( human < 0 || human > 9){
  return alert("Please pick a number from 0");
}
if ( humanDif < compDif){
  return true;
}else if  (humanDif > compDif ){
  return false;
}else {
  return true;
}
}

const updateScore = (winner) =>{
 if( winner === 'human' ){
   humanScore ++;
 }else {
   computerScore ++;
 }

}
const advanceRound = () => currentRoundNumber ++;
console.log(compareGuesses());
