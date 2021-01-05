//A code that arranges a string of numbers in order.

let numbers =[5,2,3,6,4,1,9,8,7];
let arranged =[''];
let min = 0;

for( i = 0; i < numbers.length; i++){
    
    for( j = 1; j < numbers.length; j++){
    
        if(numbers[j] <= numbers[i] && numbers[j] >= min){
         min = numbers[j]
         arranged = arranged + min;


            
            
        }


    }
 

}


console.log(arranged);

