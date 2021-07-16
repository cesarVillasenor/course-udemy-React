import '@testing-library/jest-dom';

import { returnArr } from '../../base/07-destructuring-arr';

describe(' test  in 07-destructring-arr', () => {

    
    test('Must return a string and a number', () => {
    const [ letters, numbers ] = returnArr();    // expect( arr ).toEqual( ['ABC', 123] );
    
    // expect( arr ).toEqual( ['ABC', 123] );
    // console.log( typeof numbers );

    expect( letters ).toBe( 'ABC' );
    expect( typeof letters ).toBe( 'string' );

    expect( numbers ).toBe( 123 );
    expect( typeof numbers ).toBe( 'number' );
    
    })
})