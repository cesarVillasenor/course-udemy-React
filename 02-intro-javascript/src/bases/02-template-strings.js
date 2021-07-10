

    const firstName = 'Cesar'
    const lastName = 'Vilasenor'

    // const fullName = firstName + ' ' + lastName;
    const fullName = `${ firstName } ${lastName}${ 1 + 1 }`;


    console.log( fullName );

    function getGreeting(firstName) {
        return 'Hello ' + firstName;
    }

    console.log( `This is a text: ${ getGreeting( firstName ) } `);
    