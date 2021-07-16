//https://jestjs.io/

describe('Test in file demo.test.js', () =>{



    test('These string must be equals', () => {

        // const isActive = true;

        // if( isActive ){
        //     throw new Error('Is not Active');
        // }

        // 1. inicialitation
        const  message = 'Hello world';
        // 2. Estimulate
        const message2 = `Hello world`
        // 3. Observe the behavior
        expect( message ).toBe( message2);
    })


})