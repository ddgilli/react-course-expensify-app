// const person = {
//   name: 'David',
//   age: 66,
//   location: {
//     city: 'Raleigh',
//     temp: 92
//   }
// };

//Object destructuring

//const {name = 'Anonymous', age} = person;
//const {name: firstName = 'Anonymous', age} = person;
//rename name, also provide default
//console.log(`${firstName} is ${age}.`);

//equivalent to
// const name = person.name;
// const age = person.age;

//console.log(`${name} is ${age}.`);

//const {city, temp: temperature} = person.location;
//also const{city, temp: temperature} = person.location;
//equivalent to const temperature = person.location.temp;
// const temp = person.location.temp;
// const city = person.location.city;

//console.log(`It is ${temperature} in ${city}.`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//Array destructuring

//const address = ['76 Prosperity Ct', 'Raleigh', 'NC', '27501'];
//const [street, city, state, zip] = address;
//const [, city, state] = address;

//console.log(`You are in ${city} ${state}`);

const item = ['Coffee (iced)', '$2.00', '$2.50', '$2.75'];
const [drink,,price] = item;

console.log(`A medium ${drink} costs ${price}`);