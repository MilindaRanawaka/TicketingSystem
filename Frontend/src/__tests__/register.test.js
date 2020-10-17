import React from 'react';
import { shallow } from 'enzyme';
import Register from '../Components/Login&Register/Register'

describe('Register Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<Register />).find('form.register').exists()).toBe(true)
    })

    it('renders a username amout input text', () => {
        expect(shallow(<Register />).find('#phonenoid').length).toEqual(1)
    })
    it('renders a email fine amount text', () => {
        expect(shallow(<Register />).find('#address').length).toEqual(1)
    })
    it('renders a email fine amount text', () => {
        expect(shallow(<Register />).find('#passwordId').length).toEqual(1)
    })
    it('renders a email fine amount text', () => {
        expect(shallow(<Register />).find('#femaleRadio').length).toEqual("Male")
    })
    it('renders a email fine amount text', () => {
        expect(shallow(<Register />).find('#maleRadio').length).toEqual("Female")
    })
})