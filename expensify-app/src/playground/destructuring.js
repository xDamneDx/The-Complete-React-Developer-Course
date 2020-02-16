// const person = {
//     name: 'Vladimir',
//     age: 34,
//     location: {
//         city: 'Nikolaev',
//         temp: 9
//     }
// };

// const { name, age } = person; 
// // same as:
// // const name = person.name;
// // const age = person.age;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }
// // same as:
// // if (person.location.city && person.location.temp) {
// //     console.log(`It's ${person.location.temp} in ${person.location.city}.`)
// // }

// const book = {
//     title: 'The Gray House',
//     author: 'Mariam Petrosyan',
//     publisher: {
//         name: 'Amazon Publishing'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [product, sPrice, mPrice, lPrice] = item;

console.log(`A medium ${product} costs ${mPrice}.`);
