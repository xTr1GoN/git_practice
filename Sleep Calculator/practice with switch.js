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
   
  switch(sleepDebt){
      case sleepDebt < 0:
      console.log('You are getting more than enough sleep');
      break;
      case sleepDebt > 0:
      console.log(`You are missing ${sleepDebt} hours of sleep!`);
      break;
      case sleepDebt === 0:
      console.log('You are getting the perfect amount of sleep!');
      break;
      default:
      console.log('No ideea');
      break;

  }
      
    };
 getActualSleepHours();        
getIdealSleepHours();
 calculateSleepDebt();