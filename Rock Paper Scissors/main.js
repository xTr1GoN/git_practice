//User Input
const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
   if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
     return userInput;
   }else{
     return 'Please choose between rock,paper and scissors!'
   }
 };
 //Creating a random Number
 const getComputerChoice = () =>{
   randomNumber = Math.floor(Math.random()* 3 );
   switch (randomNumber){
     case 0:
       return 'rock';
       break;
     case 1:
       return 'paper';
       break;
     case 2:
       return 'scissors';
       break;
   }
 }
 
 //console.log(getUserChoice('scissors'));
 //console.log(getComputerChoice());

 //Decision COmparison

 const determineWinner = (userChoice, computerChoice) =>{
   if(userChoice === computerChoice){
     return 'Game is a tie!';
   }
 if(userChoice === 'rock'){
   if(computerChoice === 'paper'){
     return 'The computer Won!';
   }else{
     return 'You won!';
   }
 }
 if(userChoice === 'paper'){
   if(computerChoice === 'scissors'){
     return 'The Computer Won!';
      }else{
        return 'You won!';
      }
 }
 if(userChoice === 'scissors'){
   if(computerChoice === 'rock'){
     return 'The COmputer Won!';
   }else{
     return 'You won!';
   }
 }
 };
 
 //Lets play
 const playGame = () => {
   const userChoice = getUserChoice('rock');
   const computerChoice =getComputerChoice();
   console.log('You threw ' +userChoice);
   console.log('Computer threw ' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
 };
 
 
 
 playGame();
 