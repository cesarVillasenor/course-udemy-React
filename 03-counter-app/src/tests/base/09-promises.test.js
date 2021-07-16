import { getHeroByIdAsync } from "../../base/09-promises";
import heroes from '../../data/heroes';


describe('Test with promises ', () => {
    
    test('getHeroByIdAsync must return a hero async', ( done ) => {
        
        const id  =1;
        
        getHeroByIdAsync( id ) 
            .then( hero =>  {

                expect( hero ).toBe( heroes[0] );
                done();

            });
    });
    
    test('Must return error if the hero does not exist', ( done ) => {
        
        const id = 10;
        getHeroByIdAsync( id )
            .catch( error => {
                expect( error ).toBe('Hero not found');
                done();
            });
    });
    
});
