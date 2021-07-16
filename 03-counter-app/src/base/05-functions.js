const greeting2  = (firstName) => {
    return `Hello, ${ firstName}`;
}

const greeting3  = (firstName) => `Hello, ${ firstName}`;
const greeting4  = () => `Hello world`;


export const getUser =  () => ({
        uid: 'ABC123',
        username: 'cesar',
    })

export const getActiveUser = ( firstName ) => ({ 
        uid: 'ABC123',
        username: firstName,
        });

