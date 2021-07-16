
import { getHeroById } from './08-imp-exp'

export const getHeroByIdAsync = ( id ) => {

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
                reject( 'Hero not found' );
            }
        }, 2000)
    
    
    });
    
}
