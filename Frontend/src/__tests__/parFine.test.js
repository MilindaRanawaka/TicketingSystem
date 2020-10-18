import React from 'react';
import { shallow } from 'enzyme';
import AddCredit from '../Components/Passenger/AddCredit'

//test cases for payfine
describe('Register Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<PayFine />).find('form.addFine').exists()).toBe(true)
    })

    it('renders a username amout input text', () => {
        expect(shallow(<PayFine />).find('#exampleInputEmail1').length).toEqual(1)
    })
    it('renders a email fine amount text', () => {
        expect(shallow(<PayFine />).find('#exampleInputEmail2').length).toEqual(1)
    })
    it('renders a email fine amount text', () => {
        expect(shallow(<PayFine />).find('#exampleInputEmail3').length).toEqual(1)
    })
    it('renders a email fine amount text', () => {
        expect(shallow(<PayFine />).find('#exampleInputEmail4').length).toEqual("Male")
    })
    it('renders a email fine amount text', () => {
        expect(shallow(<PayFine />).find('#exampleInputEmail1').length).toEqual("Female")
    })
})