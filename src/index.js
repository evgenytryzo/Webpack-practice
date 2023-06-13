import './index.css'
import { bro } from "./test.js"

const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

const whoIsTheGoat = [
  { name: 'Michael Jordan', link: './images/jordan.jpg' },
  { name: 'Lebron James', link: './images/james.jpg' },
  { name: 'Kobe Bryant', link: './images/bryant.jpg' },
];

console.log(doubledNumbers, bro); // 4, 6, 10

alert(doubledNumbers)
alert("Please check the console")
