import React, {Component} from 'react';
import {TOKEN_UNAME, TOKEN_TYPE} from "../config";
import { isLogin, logout } from "../ReactMiddleware/reactAuth";
import { Link } from "react-router-dom";

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        };
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false,
        });
    };

    handleNameClick = () => {
        if (localStorage.getItem(TOKEN_TYPE) === "passenger") {
            window.location = "/passengerHome";
        } else if (localStorage.getItem(TOKEN_TYPE) === "admin") {
            window.location = "/adminHome";
        } else if (localStorage.getItem(TOKEN_TYPE) === "inspector") {
            window.location = "/inspectorHome";
        }
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1"
                            >
                                <span className="navbar-toggler-icon"/>
                            </button>

                            <a className="navbar-brand" href="/">

                                <b>Ticketing System</b>
                            </a>
                            <div
                                className="collapse navbar-collapse"
                                id="bs-example-navbar-collapse-1"
                            >
                                <ul className="navbar-nav">
                                    <li className="ml-5">
                                        {this.state.isLogin &&
                                        localStorage.getItem(TOKEN_TYPE) === "admin" ? (
                                            <div className="loged-info">
                                                <div className="row">
                                                    <div className="col-md-auto">
                                                        <a href="/adminHome">
                                                            <button type="button" className="btn btn-primary">Home
                                                            </button>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-auto">
                                                        <a href="/financeStat">
                                                            <button type="button" className="btn btn-primary">Finance
                                                            </button>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-auto">
                                                        <a href="/passengerStat">
                                                            <button type="button" className="btn btn-primary">Passenger
                                                                Trips
                                                            </button>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-auto">
                                                        <a href="/overcrowded">
                                                            <button type="button"
                                                                    className="btn btn-primary">Overcrowded Buses
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <span style={{display: "none"}}> Empty </span>
                                        )}
                                        {this.state.isLogin &&
                                        localStorage.getItem(TOKEN_TYPE) === "passenger" ? (
                                            <div className="loged-info">
                                                <div className="row">
                                                    <div className="col-md-auto">
                                                        <a href="/passengerHome">
                                                            <button type="button" className="btn btn-primary">Home
                                                            </button>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-auto">
                                                        <a href="/addCredit">
                                                            <button type="button" className="btn btn-primary">Add
                                                                Credit
                                                            </button>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-auto">
                                                        <a href="/fineList">
                                                            <button type="button" className="btn btn-primary">Fines
                                                                List
                                                            </button>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-auto">
                                                        <a href="/viewHistory">
                                                            <button type="button" className="btn btn-primary">Trip
                                                                History
                                                            </button>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-auto">
                                                        <a href="/creditHistory">
                                                            <button type="button" className="btn btn-primary">Credit
                                                                History
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <span style={{display: "none"}}> Empty </span>
                                        )}
                                        {this.state.isLogin &&
                                        localStorage.getItem(TOKEN_TYPE) === "inspector" ? (
                                            <div className="loged-info">
                                                <div className="row">
                                                    <div className="col-md-auto">
                                                        <a href="/inspectorHome">
                                                            <button type="button" className="btn btn-primary">Home
                                                            </button>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-auto">
                                                        <a href="/addFine">
                                                            <button type="button" className="btn btn-primary">Add Fine
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <span style={{display: "none"}}> Empty </span>
                                        )}
                                    </li>
                                </ul>
                                <ul className="navbar-nav ml-md-auto">
                                    <li className="ml-2">

                                    </li>
                                    <li className="nav-item active">
                                        {this.state.isLogin ? (
                                            <div className="row">
                                                <div className="col-md-auto">
                                                    <h5>
                                                        <span className="badge badge-pill badge-light">
                                                        <a
                                                            href="#"
                                                            className="loged-user-name"
                                                            onClick={this.handleNameClick}
                                                        >
                                                            {" "}
                                                            {localStorage.getItem(TOKEN_UNAME)}{" "}
                                                        </a>
                                                            </span></h5>
                                                </div>
                                                <div className="col-md-auto">
                                                    <Link to="" onClick={() => this.handleLogout()}>
                                                        <a href="/login">
                                                            <button className="btn btn-sm btn-outline-primary"
                                                                    type="button">Logout
                                                            </button>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        ) : (

                                            <a href="/login">
                                                <button className="btn btn-primary my-2 my-sm-0"
                                                        type="submit">Login
                                                </button>
                                            </a>
                                        )}
                                    </li>
                                    <br />
                                    <li className="nav-item dropdown"></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
