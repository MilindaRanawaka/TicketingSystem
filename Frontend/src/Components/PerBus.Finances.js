import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {Card, CardBody, Col, Row, Table} from "reactstrap";
import FinanceNavBar from "./NavBar.Finances";
import axios from "axios";
import {serverUrl} from "./config";
import {MDBTable, MDBTableHead} from "mdbreact";

class FinancePerBus extends Component {

    constructor(props) {

        super(props);
        this.state = {

            trips: [],
            userInfo: [],
            busInfo:[],

        };
    }

    componentDidMount() {
        axios
            .get(serverUrl + "/trips/")
            .then((response) => {
                this.setState({
                    trips: response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getUsername(id){
        axios
            .get(serverUrl + "/users/" + id)
            .then((response) => {
                this.setState({
                    userInfo: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    getBusNo(id){
        axios
            .get(serverUrl + "/buses/" + id)
            .then((response) => {
                this.setState({
                    busInfo: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        return (
            <div className="content">
                <FinanceNavBar/>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <MDBTable hover>
                                    <MDBTableHead className="text-primary">
                                    <tr>
                                        <th>Bus No</th>
                                        <th className="text-center">Trip Date</th>
                                        <th className="text-center">Passenger Name</th>
                                        <th className="text-center">Trip Charge (Rs.)</th>
                                    </tr>
                                    </MDBTableHead>
                                    <tbody>
                                    {this.state.trips
                                        .map((item) => {
                                            return (
                                                <tr key={item["_id"]}>
                                                    {this.getUsername(item["userID"])}
                                                    {this.getBusNo(item["busID"])}
                                                    <td>{this.state.busInfo["regNo"]}</td>
                                                    <td className="text-center">{new Intl.DateTimeFormat("en-GB", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "2-digit",
                                                        hour: 'numeric',
                                                        minute: 'numeric'
                                                    }).format(new Date(item["tripDateTime"]))}</td>
                                                    <td className="text-center">{this.state.userInfo["username"]}</td>
                                                    <td className="text-center">{item["charge"]}.00</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </MDBTable>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FinancePerBus;

