import React from 'react';
import { shallow } from 'enzyme';
import AddFineInspectorPage from '../Components/Inspector/addFinePage'
import Register from '../Components/Login&Register/Register'

describe('Add Fine Component', () => {

    it('should render without throwing an error', () => {
        expect(shallow(<AddFineInspectorPage />).find('form.fineForm').exists()).toBe(true)
    })
    it('renders a fine amout input text', () => {
        expect(shallow(<AddFineInspectorPage />).find('#amountInput').length).toEqual(1)
    })
})

describe('Register Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<Register />).find('form.register').exists()).toBe(true)
    })

    it('renders a username amout input text', () => {
        expect(shallow(<Register />).find('#usernameID').length).toEqual(1)
    })
    it('renders a email fine amount text', () => {
        expect(shallow(<Register />).find('#emailid').length).toEqual(1)
    })
})