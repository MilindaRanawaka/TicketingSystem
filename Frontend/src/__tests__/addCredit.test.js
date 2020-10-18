import React from 'react';
import { shallow } from 'enzyme';
import AddCredit from '../Components/Passenger/AddCredit'

//test cases for addCredit form
describe('Register Component', () => {
    //check the form if t is correct 
    //pass test case
    it('should render without throwing an error', () => {
        expect(shallow(<AddCredit />).find('form.addCredit').exists()).toBe(true)
    })
    //check the if cardHolderName length correct
    //pass test case
    it('renders a username amout input text', () => {
        expect(shallow(<AddCredit />).find('#cardHolderName').length).toEqual(1)
    })
    //check the if cardNumberId length correct
    //pass test case
    it('renders a email fine amount text', () => {
        expect(shallow(<AddCredit />).find('#cardNumberId').length).toEqual(1)
    })
    //check the incorrect test case
    //fail test case
    it('renders a email fine amount text', () => {
        expect(shallow(<AddCredit />).find('#exampleInputEmail3').length).toEqual(1)
    })
})