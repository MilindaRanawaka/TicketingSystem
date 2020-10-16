import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBFormInline } from "mdbreact";


class FinanceNavBar extends Component {
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
                        <strong className="white-text">Finance Plan</strong>
                    </MDBNavbarBrand>
                    {/*<MDBNavbarToggler onClick={this.toggleCollapse} />*/}
                    {/*<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>*/}
                        <MDBNavbarNav left>
                            <MDBNavItem active={this.state.activeItem === "1"}
                                        onClick={this.toggle("1")}>
                                <MDBNavLink to="/financeStat">Finance Statistics</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem active={this.state.activeItem === "2"}
                                        onClick={this.toggle("2")}>
                                <MDBNavLink to="/financeHome">Finances Per Day</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem active={this.state.activeItem === "3"}
                                        onClick={this.toggle("3")}>
                                <MDBNavLink to="/financeRoute">Finances Per Bus Route</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem active={this.state.activeItem === "4"}
                                        onClick={this.toggle("4")}>
                                <MDBNavLink to="/financeBus">Finances Per Bus</MDBNavLink>
                            </MDBNavItem>
                            {/*<MDBNavItem active={this.state.activeItem === "4"}*/}
                            {/*            onClick={this.toggle("4")}>*/}
                            {/*    <MDBNavLink to="/financeFine">Finances for Passenger Fine</MDBNavLink>*/}
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

export default FinanceNavBar;
