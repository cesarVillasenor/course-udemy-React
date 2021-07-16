import { getHeroById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes';

describe('Test in funcitions of heroes', () => {

    test('Must return a hero by id', () => {

        const id = 1;
        const hero = getHeroById( id );

        const heroData = heroes.find( h => h.id === id );

        expect( hero ).toEqual( heroData );
        
    })
    

    test('Must return a undefined if hero not exist', () => {

        const id = 10;
        const hero = getHeroById( id );

        const heroData = heroes.find( h => h.id === id );

        expect( hero ).toEqual( undefined );
        
    })

    // Must return an arr with heroes of DC
    // owner 
    // toEqual to the filter arr
    test('Must return an arr with heroes of DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        const heroesData = heroes.filter( h => h.owner === owner );

        expect( heroes ).toEqual( heroesData );
        
    })


    // Must return an arr with heroes of Marvel
    // length = 2 toBe

    test('Must return an arr with heroes of Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        // const heroesData = heroes.filter( h => h.owner === owner );

        expect( heroes.length ).toBe( 2 );
        
    })

});