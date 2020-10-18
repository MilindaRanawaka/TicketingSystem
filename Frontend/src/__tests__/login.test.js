import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Components/Login&Register/Login'

describe('Login Component', () => {

    it('should render without throwing an error', () => {
        expect(shallow(<Login />).find('form.loginform').exists()).toBe(true)
    })

    it('renders a username amout input text', () => {
        expect(shallow(<Login />).find('#unid').length).toEqual(1)
    })

    it('renders a password fine amount text', () => {
        expect(shallow(<Login />).find('#pwdid').length).toEqual(1)
    })

    it('renders a password fine amount text', () => {
        expect(shallow(<Login />).find('#passwordId').length).toEqual(1)
    })
})