let userName = 'Razvan';

//Displays a greeting with the name or with the value stranger
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Will she succeed?';

//Displays the question asked with the name of the person that asked
console.log(`${userName || 'Stranger'} asked: ${userQuestion}`);

//Generate a number between 0 and 7
let randomNumber = Math.floor(Math.random()*8);

//Eightball not really needed in my variation!
let eightBall = '';

switch (randomNumber) {
  case  0:
    console.log('It is certain!');
    break;
  case  1:
    console.log('It is decidedly so');
    break;
  case  2:
    console.log('Reply hazy try again');
    break;
  case  3:
    console.log('Cannot predict now');
    break;
  case  4:
    console.log('My sources say no');
    break;
  case  5:
    console.log('Outlook not so good');
    break;
  case  6:
    console.log('Signs point to yes');
    break;
  case  7:
    console.log('Do not count on it');
    break;
  default:
    console.log('What kind of sorcery is this?')
    break;
}