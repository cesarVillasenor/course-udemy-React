

// const getImagesPromise = () => {
//     const prom = new Promise( (resolve, reject) => {
//         resolve('https://asdfjhsdafjhsdf.com')
//     })
//     return prom
// }


// const getImagesPromise = () => new Promise( resolve => resolve('https://asdfjhsdafjhsdf.com'))
// getImagesPromise().then( console.log );

const getImage = async() => {
    try {
        const apiKey = 'rP5qgVEFLNw33CbIzoz4o2FQuFgPj5YZ'
        const resp =  await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${  apiKey }`);
        const { data } = await resp.json();    
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append( img );
        return url;
    
    } catch (error) {
        // Error managemnt       
    }
 }
// let uu;
const u = getImage();
console.log(u)

  
// req
// .then( resp => resp.json() )
// .then( ({ data }) => {
//     const { url }  = data.images.original;

//     const img =  document.createElement("img");
//     img.src = url;

//     document.body.append( img );
// })
// .catch( console.warn );