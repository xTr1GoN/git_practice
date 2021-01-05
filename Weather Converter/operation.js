//The forecast today in Kelvin
const kelvin = 290;

//Converts Kelvin to Celsius
let celsius = kelvin-273;

//Converts Celsius to Fahrenheit + makes the number round
let fahrenheit = celsius*(9/5)+32;
fahrenheit = Math.round(fahrenheit);

//Rounding down the Fahrenheit Temperature
fahrenheit = Math.floor(fahrenheit);

//Converts Celsius to Newton
let newton = celsius*(33/100);

//Rounds Newton
newton = Math.round(newton);

//Displaying the weather
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(newton);
console.log('YA BOY');