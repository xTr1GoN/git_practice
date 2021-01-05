// Write function below
let secondIndex = 0;
let firstIndex = 0;
const checkLength =( string, character) =>{
    number = 0;
   //checks if the character appears more than 2 times
    for (i = 0; i < string.length; i++ ){
      if(string[i] === character){
        number++;
  
      }
    }
  
      if( number === 2){
       return 1;
      }else {
        return 0;
      }
  };

  
  const subLength = (string, character) => {
      if(checkLength(string,character) === 1){
         firstIndex = string.indexOf(character);
        
          secondIndex = string.indexOf(character,firstIndex+1);
           
      }else{
        return 0
      }
     
        if ( secondIndex === firstIndex+1){
            return secondIndex = string.indexOf(character,firstIndex);
        }else{
            return secondIndex = string.indexOf(character,firstIndex+1);
        }
  
  
  
  }
  
  console.log(subLength('Saturday', 'a')); //should return 6
  console.log(subLength('summer', 'm'));//should return 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0



  
  
  /*const subLength = (string, character) =>{
  const test = string.filter(word => word === character);
  console.log(test);
  const firstIndex = string.indexOf(character);
  const secondIndex = string.indexOf(character,firstIndex);
  if( secondIndex > 0 ){
    return console.log(secondIndex);
  }else {
  return console.log(0);
  }
  }
  
  subLength('', 'm'); */


  /*const firstIndex = string.indexOf(character);
        console.log(firstIndex);
  const secondIndex = string.indexOf(character,firstIndex+1);
  return secondIndex;*/