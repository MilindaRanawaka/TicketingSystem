import React from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../ReactMiddleware/reactAuth";
import { serverUrl } from "../config";

toast.configure();

//Login page of the System
export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: "",
            password: "",
        };
    }

    updateInput(key, value) {
        this.setState({
            [key]: value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const users = {
            email: this.state.email,
            password: this.state.password,
        };

        axios
            .post(serverUrl + "/users/", users)
            .then((response) => {

                //Check user type and redirect to relevant page
                const userType = response.data.user["type"];
                if (userType === "passenger") {
                    toast("Passenger Login In Successful");
                    login(response.data.token, response.data.user);
                    window.location = "/passengerHome";
                } else if (userType === "admin") {
                    toast("Admin Login In Successful");
                    login(response.data.token, response.data.user);
                    window.location = "/adminHome";
                } else if (userType === "inspector") {
                    toast("Inspector Login In Successful");
                    login(response.data.token, response.data.user);
                    window.location = "/inspectorHome";
                }

            })
            .catch((error) => {
                console.log(error.response);
                toast("Please Check Email or Password");
                this.setState({
                    password: "",
                });
            });
    }

    render() {
        return (
            <div className="container" style={{maxWidth: "35%"}}>
                <div className=" h-100">
                    <h3 align="center">Login</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" placeholder="Email"
                                   value={this.state.email}
                                   onChange={(e) => this.updateInput("email", e.target.value)}
                                   required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="password"
                                   value={this.state.password}
                                   onChange={(e) =>
                                       this.updateInput("password", e.target.value)
                                   }
                                   required/>
                        </div>
                        <br/>
                        <div className="container" style={{width: 300}}>
                            <button type="submit" className="btn btn-primary btn-block"><b>Login</b></button>
                        </div>
                    </form>
                    <br/>
                    <div className="card-footer">
                        <div className="justify-content-center links" align="center">
                            Don't have an account?
                            <a href="/register">
                                <button className="btn btn-sm btn-outline-primary" type="button">
                                    Register
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
