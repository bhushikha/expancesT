console.log('person1: shows ticket' );
console.log('person2: shows ticket' );

const preMovie = async () => {
const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout (() => resolve('ticket'), 3000);   
});
const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
const addButter = new Promise((resolve, reject) => resolve(`butter`));
const getColdDrinks = new Promise((resolve, reject) => resolve(`colddrink`));

let ticket = await promiseWifeBringingTicks;

console.log(`wife: I have the ${ticket}`);
console.log('husband: we should go in');
console.log('wife: no I am hungry');

let popcorn = await getPopcorn;

console.log(`husband: I got some ${popcorn}`);
console.log('husband: we should go in');
console.log('wife: no I want some butter on my popcorn');

let butter = await addButter;

console.log(`husband: I got some ${butter}`);
console.log('husband: anything else darling?');
console.log('wife: we got are getting late');
console.log('husband: thank you for the reminder *grins*');

let colddrink = await getColdDrinks;

console.log(`husband: I got some ${colddrink}`);
console.log('husband: go now');
console.log('wife: yup');


return ticket;

};

preMovie().then((m) => console.log( `person3: shows ${m}`));

console.log('person4: shows ticket' );
console.log('person5: shows ticket' );