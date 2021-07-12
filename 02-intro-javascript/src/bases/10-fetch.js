// https://developers.giphy.com/
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

const apiKey = 'rP5qgVEFLNw33CbIzoz4o2FQuFgPj5YZ'

const req =  fetch(`http://api.giphy.com/v1/gifs/random?api_key=${  apiKey }`);

// req.then( resp => {
//     // console.log(resp);
//     resp.json().then( data =>{
//         console.log( data );
//     });

// })
// .catch( console.warn );
req
.then( resp => resp.json() )
.then( ({ data }) => {
    const { url }  = data.images.original;

    const img =  document.createElement("img");
    img.src = url;

    document.body.append( img );
})
.catch( console.warn );