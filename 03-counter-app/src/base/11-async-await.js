

export const getImage = async() => {

    try {
    
        const apiKey = 'rP5qgVEFLNw33CbIzoz4o2FQuFgPj5YZ'
        const resp =  await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${  apiKey }`);
        const { data } = await resp.json();    
        const { url } = data.images.original;
        
        return url;
    
    } catch (error) {
        // Error managemnt    
        return 'Not exist';   
    }
 }

