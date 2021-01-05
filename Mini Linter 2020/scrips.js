let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// transforms string into an array we can use 
const storyWords = story.split(' ');


// filter unnecessaryWords
const betterWords = storyWords.filter(word =>{
  while(word != unnecessaryWords[0] && word != unnecessaryWords[1] && word != unnecessaryWords[2]){
    return word;
  }
})
let overusedCount=0;
let veryCount=0;
let reallyCount=0;
let basicallyCount=0

// how many times the words are overused and how many times each word is used 
const countOverused = () => {
for( i = 0; i < storyWords.length; i++ ){
  //console.log(`I = ${storyWords[i]}`);
  for ( j = 0; j < overusedWords.length ; j++){
    //console.log(`J = ${overusedWords}`);
    if( storyWords[i] === overusedWords[j]){
      overusedCount ++;
     // console.log(storyWords[i]);
      if( storyWords[i] === 'very'){
        veryCount ++;
      }else if( storyWords[i] === 'really'){
        reallyCount ++;
      }else {
        basicallyCount ++;
      }

    }
      
    }
  }
  return `You have used the word basically ${basicallyCount} times, the word very ${veryCount} times and the word really ${reallyCount} times. In total you used these words ${overusedCount} times`;
}

const storyLetters = story.split('');

const sentenceCount = () =>{
  let count=0;
  for ( i = 0; i < storyLetters.length ; i++){
    if( storyLetters[i] === '!' || storyLetters[i] === '.'){
     
      count ++;
    }
  }
return count;
}

const information = () => {
  console.log(`The word count is ${storyWords.length} words`);
  console.log(`The sentence count is ${sentenceCount(storyLetters)} sentences`);
  console.log(countOverused());
}




// console.log(storyWords.length);
// console.log(betterWords.includes(unnecessaryWords[0]));
// console.log(countOverused());
//console.log(storyLetters);
// console.log(sentenceCount(storyLetters));
information();
