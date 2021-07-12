// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find



// import { heroes } from "./data/heroes";
// import { heroes } from './data/heroes';
// import { heroes } from "./data/heroes";
// import {heroes, owners }  from "./data/heroes";
// import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";



// console.log( owners );
// console.log( heroes );

// const getHeroById = (id ) => {
//     return heroes.find( ( hero ) => {
//         if ( hero.id === id ){
//             return true;
//         }
//         else {
//             return false;
//         }
//     });
// }

// const getHeroById = (id ) => {
//     return heroes.find( ( hero ) => hero.id === id );
// }

export const getHeroById = ( id ) => heroes.find( ( hero ) => hero.id === id );


// console.log( getHeroById(2) );



export const getHeroesByOwner = ( owner ) => heroes.filter( (hero) => hero.owner === owner );

// console.log( getHeroesByOwner('Marvel'))
 


