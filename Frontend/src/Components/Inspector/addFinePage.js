import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBox, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";
import Calendar from 'react-calendar';
import { TOKEN_UNAME, serverUrl } from "../config";
import "./addFinePage.css";
import { toast } from "react-toastify";

export default class AddFineInspectorPage extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: "",
            routeID: "",
            busID: "",
            userID: "",
            startLocation: "",
            endLocation: "",
            charge: "",
            tripDateTime: "",
            busDetails: "",
            userDetails: "",
            routeDetails: "",
            dateInput: "",
            fine: "",
            distance: "",
        }

    }

    componentDidMount() {
        axios
            .get(serverUrl + "/trips/" + this.props.match.params.id)
            .then((response) => {

                this.setState({
                    id: response.data._id,
                    routeID: response.data.routeID,
                    busID: response.data.busID,
                    userID: response.data.userID,
                    startLocation: response.data.startLocation,
                    endLocation: response.data.endLocation,
                    charge: response.data.charge,
                    distance: response.data.distance,
                    tripDateTime: response.data.tripDateTime,
                });

                this.getRouteInfo(this.state.routeID);
                this.getBusReg(this.state.busID);
                this.getUserName(this.state.userID);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getBusReg(id) {
        axios
            .get(serverUrl + "/buses/" + id)
            .then((response) => {
                this.setState({
                    busDetails: response.data["regNo"],
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getUserName(id) {
        axios
            .get(serverUrl + "/users/" + id)
            .then((response) => {
                this.setState({
                    userDetails: response.data["username"],
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getRouteInfo(id) {
        axios
            .get(serverUrl + "/routes/" + id)
            .then((response) => {
                this.setState({
                    routeDetails: response.data["routeNo"],
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    updateInput(key, value) {
        this.setState({
            [key]: value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const fines = {
            userID: this.state.userID,
            userName: this.state.userDetails,
            tripID: this.state.id,
            Location: this.state.startLocation + " to " + this.state.endLocation,
            fine: this.state.fine,
            paidOrNot: "Not Paid",

        };


        axios
            .post(serverUrl + "/fines/add/", fines)
            .then((response) => {
                toast("Fine Added");

                this.setState({
                    fine: "",
                });
            })
            .catch((error) => {
                console.log(error.response);
                toast("Error");
            });


    }

    render() {
        return (
            <div className="container">
                <h1 align="center"> <span className="badge badge-dark">
                    Add Fine
                </span></h1>
                <br />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className="all-center" md="6">
                            <form onSubmit={this.onSubmit}>
                                <p className="h4 text-center mb-4">Add Fine</p>
                                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                    Route No
                                </label>
                                <input type="text" id="exampleDisabled" className="form-control" placeholder={this.state.routeDetails} disabled />
                                <br />
                                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                    Bus Reg No
                                </label>
                                <input type="text" id="exampleDisabled" className="form-control" placeholder={this.state.busDetails} disabled />
                                <br />
                                <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                                    User's Name
                                </label>
                                <input type="text" id="exampleDisabled" className="form-control" placeholder={this.state.userDetails} disabled />
                                <br />
                                <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                                    Start & End Location
                                </label>
                                <input type="text" id="exampleDisabled" className="form-control" placeholder={this.state.startLocation + " to " + this.state.endLocation} disabled />
                                <br />
                                <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                                    Charge
                                </label>
                                <input type="text" id="exampleDisabled" className="form-control" placeholder={this.state.charge} disabled />
                                <br />
                                <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                                    Distance
                                </label>
                                <input type="text" id="exampleDisabled" className="form-control" placeholder={this.state.distance} disabled />
                                <br />
                                <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                                    Trip Date Time
                                </label>
                                <input type="text" id="exampleDisabled" className="form-control" placeholder={new Date(this.state.tripDateTime).toUTCString()} disabled />
                                <br />
                                <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                                    Amount
                                </label>
                                <input type="text" id="exampleDisabled" className="form-control" placeholder="Type Amount" onChange={(e) =>
                                    this.updateInput("fine", e.target.value)
                                } />
                                <div className="text-center mt-4">
                                    <MDBBtn color="unique" type="submit">
                                        Add Fine
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}