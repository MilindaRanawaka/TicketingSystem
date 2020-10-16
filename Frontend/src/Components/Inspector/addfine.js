import React, { Component } from "react";
import { MDBContainer, MDBMask, MDBView } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Card, CardBody, Col, Row, Table } from "reactstrap";
import axios from "axios";
import Calendar from 'react-calendar';
import { TOKEN_UNAME, serverUrl } from "../config";
import 'react-calendar/dist/Calendar.css';

var count = 0;

export default class AddFineInspector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            trip: [],
            busDetails: [],
            userDetails: [],
            routeDetails: [],
            date: new Date(),
        };
    }

    componentDidMount() {
        //Fetching all Trip Data
        axios
            .get(serverUrl + "/trips/")
            .then((response) => {
                this.setState({
                    trip: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getBusReg(id) {
        axios
            .get(serverUrl + "/buses/" + id)
            .then((response) => {
                this.setState({
                    busDetails: response.data,
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
                    userDetails: response.data,
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
                    routeDetails: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div className="container">
                <h1 align="center"> <span className="badge badge-dark">
                    Add Fine
                </span></h1>
                {/*
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
        */}

                <Row>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <Table responsive striped>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Route No</th>
                                            <th>Bus Reg No</th>
                                            <th>User Name</th>
                                            <th>Start Location</th>
                                            <th>End Location</th>
                                            <th>Charge</th>
                                            <th>Trip Date Time</th>
                                            <th>Add Fine</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.trip
                                            .map((item) => {
                                                return (
                                                    <tr key={item["_id"]}>
                                                        {this.getRouteInfo(item["routeID"])}
                                                        {this.getBusReg(item["busID"])}
                                                        {this.getUserName(item["userID"])}
                                                        <td>{this.state.routeDetails["routeNo"]}</td>
                                                        <td>{this.state.busDetails["regNo"]}</td>
                                                        <td>{this.state.userDetails["username"]}</td>
                                                        <td>{item["startLocation"]}</td>
                                                        <td>{item["endLocation"]}</td>
                                                        <td>{item["charge"]}</td>
                                                        <td>{new Intl.DateTimeFormat("en-GB", {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "2-digit",
                                                            hour: 'numeric',
                                                            minute: 'numeric'
                                                        }).format(new Date(item["tripDateTime"]))}</td>
                                                        <td><a href={"/addFinePage/" + item["_id"]}>Add Fine</a></td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
