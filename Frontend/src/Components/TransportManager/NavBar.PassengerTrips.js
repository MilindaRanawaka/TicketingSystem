import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";


class PassengerTripNavBar extends Component {
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
                        <MDBNavLink to="/passengerStat">Passenger Trips Statistics</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={this.state.activeItem === "2"}
                                onClick={this.toggle("2")}>
                        <MDBNavLink to="/passengertrips">Passengers - Bus Routes </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={this.state.activeItem === "3"}
                                onClick={this.toggle("3")}>
                        <MDBNavLink to="/passenger-bus">Passengers - Buses</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
        );
    }
}

export default PassengerTripNavBar;
