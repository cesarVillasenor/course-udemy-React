// destructuration
// destructuring assingment

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const person  = {
    firstName: "cesar",
    age: 45,
    key: 'Ironman',
    range: 'soldier'
};

// const { firstName:firsName2 } =  person;
// console.log( firsName2 );
const {age, key, firstName,} = person;


// console.log( person.firstName );
// console.log( person.age );
// console.log( person.key );



console.log( firstName );
console.log( age );
console.log( key );

const returnUseContext  = ({ key, firstName, age, range = "captain" } ) => {
    
    // console.log(firstName, age, range);

    return {
        keyName: key,
        years: age,
        latlng: {
            lat: 14.1232,
            lng: -12.3232,
        },
    }
}

const  {keyName, years, latlng:{lat, lng} } = returnUseContext(person);
// const  { keyName, years, latlng } = returnUseContext(person);
// const { lat, lng } = latlng;
console.log( keyName, years );
console.log( lat, lng );