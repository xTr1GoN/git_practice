const getSleepHours = day =>{
    switch(day){
      case 'Monday':
        return 8;
        break;
      case 'Tuesday':
        return 8;
        break;
      case 'Wednesday':
        return 8;
        break;
      case 'Thursday':
        return 8;
        break;
      case 'Friday':
        return 8;
        break;
      case 'Saturday':
        return 11;
        break;
      case "Sunday":
        return 10;
        break;
    }
   };
   
   const getActualSleepHours = () =>{
     return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
     
   }
   
   const getIdealSleepHours = () =>{
     idealHours = 8;
     return idealHours * 7;
     
   }
   
   const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    sleepDebt = idealSleepHours - actualSleepHours;
   
    if(sleepDebt < 0) {
      console.log(`You are getting more than enough sleep! ${sleepDebt} Hours More`);
    }else if(sleepDebt === 0) {
      console.log('You are getting the perfect amount of sleep!');
    }else {
      console.log(`You are missing ${sleepDebt} hours of sleep!`);
    }
      
    };
         
               
   
    
   
   console.log(`You are sleeping ${getActualSleepHours()} hours per week!`);
   console.log(`Your ideal amount of sleep per week is ${getIdealSleepHours()}!`);
   calculateSleepDebt();