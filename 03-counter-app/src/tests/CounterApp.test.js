import React from 'react';
import { shallow } from 'enzyme';
import CounterApp  from '../CounterApp';

// task
// 1. Create the follwing tests for <CounterApp />
//      * Should show <CounterApp /> correctly (do match with snapShot)

//      * should show value by default of 100
//      * Use wrapper.find, takin the element html where it shown of counter value

describe('Tests of <CounterApp /> ', () => {
    
    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {

        wrapper = shallow( <CounterApp /> );

    })
    
    test('should show <CounterApp /> correctly (do match with snapShot)', () => {
        
        expect( wrapper ).toMatchSnapshot();
        
    });


    test('should show value by default of 100', () => {
        
        // const counter = '100';
        const wrapper = shallow( <CounterApp value={ 100 }/> );
      
        const h2Counter = wrapper.find('h2').text().trim();
        expect( h2Counter ).toBe( '100' )
        
    })
    
    test('should increase with button +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const h2Counter = wrapper.find('h2').text().trim();

        expect( h2Counter ).toBe('11');
        
    })
    
        
    test('should decrease with button -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const h2Counter = wrapper.find('h2').text().trim();

        expect( h2Counter ).toBe('9');
        
    })

    test('should reset value with button reset', () => {

        const wrapper = shallow( <CounterApp value={ 105 }/> );
      
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const h2Counter = wrapper.find('h2').text().trim();

        expect( h2Counter ).toBe('105');
        
    })

});