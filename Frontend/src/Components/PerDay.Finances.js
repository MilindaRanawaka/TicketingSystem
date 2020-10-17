import React, { Component } from "react";
import {Card, CardBody, Col, Row, Table} from "reactstrap";
import { MDBTable, MDBTableHead } from 'mdbreact';
import FinanceNavBar from "./NavBar.Finances";
import axios from 'axios';
import {serverUrl} from "./config";


class FinancePerDate extends Component {

    constructor(props) {

        super(props);
        this.state = {

            trips: [],
            userDetails: [],

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
                    userDetails: response.data,
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
                                        <th>Trip Date</th>
                                        <th className="text-center">Passenger Name</th>
                                        <th className="text-center">Trip Charge</th>
                                    </tr >
                                    </MDBTableHead>
                                    <tbody>
                                    {this.state.trips
                                        .map((item) => {
                                            return (
                                                <tr key={item["_id"]}>
                                                    <td >{new Intl.DateTimeFormat("en-GB", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "2-digit",
                                                        hour: 'numeric',
                                                        minute: 'numeric'
                                                    }).format(new Date(item["tripDateTime"]))}</td>
                                                    <td className="text-center">{item["userName"]}</td>
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

export default FinancePerDate;




