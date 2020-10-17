import React from 'react';
import { shallow } from 'enzyme';
import AddCredit from '../Components/Passenger/AddCredit'

describe('Register Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<AddCredit />).find('form.addCredit').exists()).toBe(true)
    })

    it('renders a username amout input text', () => {
        expect(shallow(<AddCredit />).find('#cardHolderName').length).toEqual(1)
    })
    it('renders a email fine amount text', () => {
        expect(shallow(<AddCredit />).find('#cardNumberId').length).toEqual(1)
    })
    it('renders a email fine amount text', () => {
        expect(shallow(<AddCredit />).find('#exampleInputEmail3').length).toEqual(1)
    })
})