

const charactes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , c3 ] = charactes;

export const returnArr = () =>{
    return ['ABC', 123]
};

// const [ letras, numeros ] =  returnArr();

const uSta =  ( value ) => {
    return [ value, () => {console.log('Hello world') } ];
}

const arr = uSta( 'Goku' );

const [ firstName, setName ] = uSta( 'Goku' )
