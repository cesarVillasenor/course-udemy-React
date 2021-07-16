import '@testing-library/jest-dom';

import { getUser, getActiveUser } from  '../../base/05-functions'

describe('Test 05-functions', () => {

    test('getUser must return an obj', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'cesar',
        }

        const user = getUser();

        expect( user ).toEqual( userTest );
    });

    // getActiveUser must return an obj
    test('getActiveUser must return an obj', () => {
        
        const firstname = 'Cesar';

        const activeUserTest = {
            uid: 'ABC123',
            username: firstname,
        }

        const activeUser = getActiveUser( firstname );

        expect( activeUser ).toEqual( activeUserTest );
    });


});