

const charactes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , c3 ] = charactes;
console.log( c3 );

const returnArr = () =>{
    return ['ABC', 123]
};

const [ letras, numeros ] =  returnArr();
console.log(letras, numeros);

// Task
// 1. The first value of arr it will be named firstName
// 2. It will be named setName
const uSta =  ( value ) => {
    return [ value, () => {console.log('Hello world') } ];
}

const arr = uSta( 'Goku' );
console.log(arr);

// arr[1]();

const [ firstName, setName ] = uSta( 'Goku' )
console.log ( firstName )
setName();