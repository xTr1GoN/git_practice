/* Cum functioneaza ! 
Creaza o gluma , din 3 bucati de data 
1. Intrebarea ? 
2. Raspunsul + prenume la final .
*/ 

const data = ["When",'Go','run'];
const data2 =['answers','answer2','answer3'];
const data3 = ['John', 'Paul','Soto'];
let firstRandom = [''];
let secondRandom = [''];
let thirdRandom = [''];

const randomizer = (first,second,third) => {
    
      firstRandom =first[Math.floor(Math.random() * first.length )];
      secondRandom = second[Math.floor(Math.random() * second.length)];
      thirdRandom = third[Math.floor(Math.random()* third.length)];

return console.log(`${firstRandom} ${secondRandom} ${thirdRandom}`);    
}
       



randomizer(data,data2,data3);

