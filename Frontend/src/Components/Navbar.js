import React, {Component} from 'react';
import {TOKEN_UNAME, TOKEN_ID, TOKEN_TYPE} from "./config";
import { isLogin, logout } from "./ReactMiddleware/reactAuth";
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
        if (localStorage.getItem(TOKEN_TYPE) === "customer") {
            window.location = "/customerHome";
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
                                <span className="navbar-toggler-icon" />
                            </button>
                            <a className="navbar-brand" href="/">
                                Online Fashion Store
                            </a>
                            <div
                                className="collapse navbar-collapse"
                                id="bs-example-navbar-collapse-1"
                            >
                                <ul className="navbar-nav">

                                    <li className="nav-item active">
                                        <a className="nav-link" href="/allProducts">All Products <span className="sr-only">(current)</span></a>
                                    </li>
                                    {/*
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Link</a>
                                    </li>
                                    onClick={this.handleCategoryClick(item.categoryName)} onChange={this.onChangeCat}
                                    */}
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="/"
                                            id="navbarDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Categories
                                        </a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ml-md-auto">
                                    <li className="ml-2">
                                        {this.state.isLogin &&
                                        localStorage.getItem(TOKEN_TYPE) === "customer" ? (
                                            <div className="loged-info">
                                                <a href="/wishList"> Wish List </a>
                                                <a href="/cart">
                                                    {" "}
                                                    <i className="fas fa-cart-plus cart-icon"></i>{" "}
                                                </a>
                                                <a href="/userEdit">
                                                    {" "}
                                                    My Info{" "}
                                                </a>
                                            </div>
                                        ) : (
                                            <span style={{ display: "none" }}> Empty </span>
                                        )}
                                        {this.state.isLogin &&
                                        localStorage.getItem(TOKEN_TYPE) === "storeManager" ? (
                                            <div className="loged-info">

                                            </div>


                                        ) : (
                                            <span style={{ display: "none" }}> Empty </span>
                                        )}
                                    </li>
                                    <li className="nav-item active">
                                        {this.state.isLogin ? (
                                            <div>
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a
                                                    href="#"
                                                    className="loged-user-name"
                                                    onClick={this.handleNameClick}
                                                >
                                                    {" "}
                                                    {localStorage.getItem(TOKEN_UNAME)}{" "}
                                                </a>
                                                <Link to="" onClick={() => this.handleLogout()}>
                                                    Logout
                                                </Link>
                                            </div>
                                        ) : (
                                            <a href="/login">Login</a>
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
