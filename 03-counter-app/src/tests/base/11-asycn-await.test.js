//https://github.com/wojtekmaj/enzyme-adapter-react-17
//https://www.npmjs.com/package/enzyme-to-json
//https://enzymejs.github.io/enzyme/
import { getImage } from "../../base/11-async-await";

describe('Test with async-await and fetch', () =>{

    test('Must return url of img ', async () => {

        const url = await getImage();
        expect( typeof url ).toBe('string');
        
    })


});