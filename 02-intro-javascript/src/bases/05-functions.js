// functions on JS

// const greeting =  function(firstName){
//     return `Hello ${ firstName}`;
// }
// greeting = 30


const greeting2  = (firstName) => {
    return `Hello, ${ firstName}`;
}

const greeting3  = (firstName) => `Hello, ${ firstName}`;
const greeting4  = () => `Hello world`;


// console.log( greeting('Goku'));

console.log(greeting2('Vegeta'));
console.log(greeting3('Goku'));
console.log(greeting4());


const getUser =  () => ({
        uid: 'ABC123',
        username: 'cesar',
    })

const user =  getUser();
console.log( user );

// task 
// 1. Transform to arrow function
// 2. Must Return an implicit object
// 3. Tests 
 
// function getActiveUser( firstName ) {
//     return {
//         uid: 'ABC123',
//         username: 'cesar',
//     }
// };

const getActiveUser = ( firstName ) => ({ 
        uid: 'ABC123',
        username: 'cesar',
        });


const activeUser = getActiveUser('Cesar');
console.log(activeUser);
