import React, {Component} from 'react';
import axios from "axios";
import {serverUrl, TOKEN_ID} from "../config";
import {MDBTable, MDBTableHead} from "mdbreact";
import {Card, CardBody, Col, Row} from "reactstrap";

class TripHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trips: [],
        };
    }

    componentDidMount() {
        axios
            .get(serverUrl + "/trips")
            .then((response) => {
                this.setState({
                    trips: response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    productList() {
        return this.state.trips.map(function (obj, i) {
            return (
                <tr className="text-center" key={i}>
                    <td>{obj.startLocation}</td>
                    <td className="text-center">{obj.endLocation}</td>
                    <td className="text-center">Rs. {obj.charge}.00</td>
                </tr>
            );
        });
    }

    render() {
        return (

            <div className="container" style={{ marginTop: 30 , maxWidth: "70%"}}>
                <h3 align="center"><b>Trip History</b></h3>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <MDBTable hover>
                                    <MDBTableHead className="text-primary">
                                        <tr className="text-center">
                                            <th>Start Location</th>
                                            <th>End Location</th>
                                            <th>Charge</th>
                                        </tr>
                                    </MDBTableHead>
                                    <tbody>
                                    {this.productList()}
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

export default TripHistory;
