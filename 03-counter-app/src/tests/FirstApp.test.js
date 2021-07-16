import React from 'react';
import { shallow } from 'enzyme';
// import { render } from '@testing-library/react';
import FirstApp from '../FirstApp';

describe('Test for <FirstApp />', () => {

    // test('Should return the messages "Hello i am Goku" ', () => {
    //     const greeting =  "Hello i am Goku";
    //     const { getByText } =  render( <FirstApp greeting={ greeting } />);
    //     expect( getByText( greeting ) ).toBeInTheDocument();    
    // });
   
    test('should show <FirstApp /> correctly', () => {

        const greeting = "Hello i am Goku";
        const wrapper = shallow(<FirstApp greeting={ greeting }/>);

        expect( wrapper ).toMatchSnapshot();

        
    });

    test('should  show subtitle sent by props', () => {
        const greeting = "Hello i am Goku";
        const subtitle = "I am subtitle";

        const wrapper = shallow(
            <FirstApp 
            greeting={ greeting }
            subtitle={ subtitle } 
            />
            );
        
        const pText =  wrapper.find('p').text();
        // console.log(pText);
        expect( pText ).toBe( subtitle )
        
    })
    
    

});