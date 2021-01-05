/*const input = 'turpentine and turtles';
const vowels = 'aeiou';
const resultArray =[];
*/


const phrase = 'turpentine and turtles';
const vowels = 'aeiou';
//const doubles= 'ue'
const resultArray=[];
//const whaleSound=[];

const noConsonants = () => {
  for( let i = 0 ; i < phrase.length ; i++){
    //console.log(`I = ${phrase[i]}`);
    for(let j =0 ; j < vowels.length ; j++){
     // console.log(`J= ${phrase[j]}`);
      if(phrase[i] === vowels[j]) {
        if(phrase[i] === vowels[j] && (phrase[i] === 'u' || phrase[i] === 'e')){
          resultArray.push(phrase[i]);
        }
        resultArray.push(phrase[i]);
      }
    }
  }
console.log(resultArray.join(''));
}
/*const whale =() => {
  noConsonants();
  for( let i = 0 ; i < resultArray.length ; i++ ){
    for (let j = 0; j < doubles.length; j++ ){
      if( resultArray[i] === doubles[j]){
        whale

      }
    }
  }

}*/

noConsonants();