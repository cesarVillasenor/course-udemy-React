import '@testing-library/jest-dom';

import { getGreeting } from '../../base/02-template-strings';


describe('Tests in 02-template-string.js', () =>{
    
    
    test('getGreeting must return Hello Cesar!', () => {
        
        const firstName = 'Cesar!';

        const greeting =  getGreeting( firstName );


        expect( greeting ).toBe( 'Hello ' + firstName + '!')
    });

    test('getGreeting must return Hello Carlos! if there are not arguments', () => {

        const greeting = getGreeting();

        expect( greeting ).toBe( 'Hello Carlos!' );
    });


});