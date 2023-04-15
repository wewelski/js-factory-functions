// const bookFactory = (title, author, pages) => ({
//     title,
//     author,
//     pages,
//     const getInfo = () => {
//         return (`${title}, ${author}, ${pages}`);
//     }
// });

//=========================================

// const book2 = bookFactory("Eloquent JavaScript","Jon Duckett","399 pages");
// console.log(book2);

// const name = 'Maynard';
// const color = 'red';
// const number = 34;
// const food = 'rice';

// console.log({name,color,number,food});

//=========================================

// function greeting(fname) {
//     return console.log(`Hello, ${fname}`);
// }

// greeting('Roowell');
// greeting('Ravi');

//=========================================

// const createCounter = () => {
//     let count = 0;
//     const increment = () => {
//         count++;
//         console.log(count);
//     };
//     const decrement = () => {
//         count--;
//         console.log(count);
//     }
//     return { increment, decrement };
// };

//=========================================

// function createCartItem(item, quantity) {
//     let itemQuantity = quantity;

//     const increaseQuantity = () => {
//         quantity++;
//         console.log (`Quantity increased to ${quantity}`)
//     }
//     const decreaseQuantity = () => {
//         quantity--;
//         console.log (`Quantity decreased to ${quantity}`)
//     }
//     return {
//         item,
//         quantity,
//         increaseQuantity,
//         decreaseQuantity,
//     };
// };

// const cartItem = createCartItem('shoes',1);
// cartItem.increaseQuantity();
// cartItem.decreaseQuantity();

//=========================================

// function tempConverter(temp) {
//         return console.log((temp * 1.8) + 32);
// };

// tempConverter(100);

//=========================================


// a game-like logic
// const playerFactory = (name, level) => {
//     let health = level * 2;
//     const getLevel = () => level;
//     const getName = () => name;
//     const getHealth = () => health;
  
//     const die = () => console.log(`Player ${name} is dead`);
  
//     const damage = (dmg) => {
//       health -= dmg;
  
//       if (health <= 0) {
//         die();
//       }
//     };
  
//     const attack = (enemy) => {
//       enemy.damage(level);
//       console.log(`${enemy.getName()} has been damaged`);
//       console.log(`The enemy's current health is: ${enemy.getHealth()}`);
//     };
  
//     return { getLevel, getName, getHealth, attack, damage };
//   };
  
//   const player = playerFactory("Carlo", 2);
//   const enemy = playerFactory("Monster", 1);
  
//   player.attack(enemy);

//=========================================

const calculator = (() => {
    const add = (a,b) => a + b;
    const minus = (a,b) => a - b;
    const mult = (a,b) => a * b;
    const divide = (a,b) => a / b;

    return { add, minus, mult, divide };
})(); //this is an IIFE or Immediately Invoked Function Expression and it's cool that it makes your function codes shorter!

console.log(calculator.add(5,10));