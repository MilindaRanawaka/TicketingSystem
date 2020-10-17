import React, {Component} from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { serverUrl } from "../config";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class Register extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            email: "",
            phoneNo: "",
            password: "",
            conPassword: "",
            address: "",
            gender: "",
            type: "passenger",
            balance: 0
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
            username: this.state.username,
            email: this.state.email,
            phoneNo: this.state.phoneNo,
            password: this.state.password,
            address: this.state.address,
            gender: this.state.gender,
            type: this.state.type,
            balance: this.state.balance,
        };

        if (this.state.password === this.state.conPassword) {

            axios
                .post(serverUrl + "/users/add", users)
                .then((response) => {

                    toast("Register Successful! \n You will be redirected to Login Page");
                    setTimeout(() => {
                        window.location = "/login";
                    }, 5000);
                })
                .catch((error) => {
                    console.log(error.response);
                    toast("Email or Username Exists");
                    this.setState({
                        username: "",
                        email: "",
                        password: "",
                        conPassword: "",
                    });
                });
        } else {
            toast("Password doesn't match");
            this.setState({
                password: "",
                conPassword: "",
            });
        }
    }

    render() {
        return (
            <div className="container" style={{maxWidth: "35%"}}>
                <h3 align="center"><b>Create Passenger Account</b></h3><br/>
                <form onSubmit={this.onSubmit} className="register">
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text"
                               className="form-control"
                               id="usernameID"
                               placeholder="User Name"
                               value={this.state.username}
                               onChange={(e) =>
                                   this.updateInput("username", e.target.value)
                               }
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email"
                               className="form-control"
                               placeholder="Email"
                               id="emailid"
                               value={this.state.email}
                               onChange={(e) => this.updateInput("email", e.target.value)}
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Phone No</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Phone No"
                               value={this.state.phoneNo}
                               onChange={(e) =>
                                   this.updateInput("phoneNo", e.target.value)
                               }
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <textarea
                            placeholder="Address"
                            rows="1"
                            className="form-control"
                            value={this.state.address}
                            onChange={(e) =>
                                this.updateInput("address", e.target.value)
                            }
                            required/>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Gender</label>
                        <div className="row">
                            <div className="col-md-auto">
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        id="maleRadio"
                                        name="gender"
                                        value="Male"
                                        onChange={(e) =>
                                            this.updateInput("gender", e.target.value)
                                        }
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Male
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-auto">
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        id="femaleRadio"
                                        name="gender"
                                        value="Female"
                                        onChange={(e) =>
                                            this.updateInput("gender", e.target.value)
                                        }
                                    />
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                               className="form-control"
                               placeholder="Password"
                               value={this.state.password}
                               onChange={(e) =>
                                   this.updateInput("password", e.target.value)
                               }
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password"
                               className="form-control"
                               placeholder="Confirm Password"
                               value={this.state.conPassword}
                               onChange={(e) =>
                                   this.updateInput("conPassword", e.target.value)
                               }
                               required/>
                    </div>

                    <br/>
                    <div className="container" style={{width: 300}}>
                        <button type="submit" className="btn btn-primary btn-block"><b>Register</b></button>
                    </div>
                    <br/><br/>
                </form>
            </div>
        );
    }
}

export default Register;
