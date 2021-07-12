// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

import { getHeroById } from "./bases/08-imp-exp"

// const prom = new Promise( (resolve, reject) =>{
    
//     setTimeout( () => {
//         //task
//         // import 
//         const hero = getHeroById(2);
//         // console.log(hero);
//         resolve( hero );

//     }, 2000)


// });


// prom.then( (hero) => {
//     console.log('Hero', hero)
// })
// .catch( err => console.log( err ) );

const getHeroByIdAsync = ( id ) => {

    return  new Promise( (resolve, reject) =>{
    
        setTimeout( () => {
            //task
            // import 
            const hero = getHeroById(id);
            // console.log(hero);
            if ( hero ){
                resolve( hero );
            }
            else {
                reject( 'Hero not found');
            }
        }, 2000)
    
    
    });
    
}

getHeroByIdAsync(1)
    .then( console.log )
    .catch( console.warn );
