import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";


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
                <MDBNavbarNav left>
                    <MDBNavItem active={this.state.activeItem === "1"}
                                onClick={this.toggle("1")}>
                        <MDBNavLink to="/overcrowded">Overcrowded Statistics by Bus</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
        );
    }
}

export default OvercrowdedNavBar;
