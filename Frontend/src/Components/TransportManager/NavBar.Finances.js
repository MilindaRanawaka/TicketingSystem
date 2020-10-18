import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";


class FinanceNavBar extends Component {
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
                </MDBNavbarNav>
            </MDBNavbar>
        );
    }
}

export default FinanceNavBar;
