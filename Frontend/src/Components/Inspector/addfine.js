import React, { Component } from "react";
import { MDBContainer, MDBMask, MDBView } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Card, CardBody, Col, Row, Table } from "reactstrap";
import axios from "axios";
import { TOKEN_UNAME, serverUrl } from "../config";

export default class AddFineInspector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            trip: [],
            busDetails: [],
            userDetails: [],
            routeDetails: [],
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

    render() {
        return (
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Route No</th>
                                            <th>Bus Reg No</th>
                                            <th>User Name</th>
                                            <th>Start Location</th>
                                            <th>End Location</th>
                                            <th>Charge</th>
                                            <th>Trip Date Time</th>
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
                                                        <td>{item["tripDateTime"]}</td>
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
