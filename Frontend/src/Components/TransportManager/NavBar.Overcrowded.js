import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBFormInline } from "mdbreact";


class OvercrowdedNavBar extends Component {
    // state = {
    //     isOpen: false
    // };
    //
    // toggleCollapse = () => {
    //     this.setState({ isOpen: !this.state.isOpen });
    // }

    state = {
        activeItem: "1"
    }

    toggle = tab => () => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    }
    render() {
        return (

            <MDBNavbar color="primary-color" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Passenger Trips Info</strong>
                </MDBNavbarBrand>
                {/*<MDBNavbarToggler onClick={this.toggleCollapse} />*/}
                {/*<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>*/}
                <MDBNavbarNav left>
                    <MDBNavItem active={this.state.activeItem === "1"}
                                onClick={this.toggle("1")}>
                        <MDBNavLink to="/overcrowded">Overcrowded Statistics by Bus</MDBNavLink>
                    </MDBNavItem>
                    {/*<MDBNavItem active={this.state.activeItem === "4"}*/}
                    {/*            onClick={this.toggle("4")}>*/}
                    {/*    <MDBNavLink to="/passenger-date">Dates - Passengers</MDBNavLink>*/}
                    {/*</MDBNavItem>*/}

                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBFormInline waves>
                            <div className='md-form my-0'>
                                <input
                                    className='form-control mr-sm-2'
                                    type='text'
                                    placeholder=''
                                    aria-label='Search'
                                />
                            </div>
                        </MDBFormInline>
                    </MDBNavItem>

                    <MDBNavItem active>
                        <MDBNavLink to='#!'>Search</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
                {/*</MDBCollapse>*/}
            </MDBNavbar>

        );
    }
}

export default OvercrowdedNavBar;
