

    const firstName = 'Cesar'
    const lastName = 'Vilasenor'

    // const fullName = firstName + ' ' + lastName;
    const fullName = `${ firstName } ${lastName}${ 1 + 1 }`;



   export function getGreeting(firstName = 'Carlos') {
        return 'Hello ' + firstName + '!';
    }
