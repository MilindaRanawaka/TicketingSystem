import React, { Component } from "react";
import {Card, CardBody, Col, Row} from "reactstrap";
import FinanceNavBar from "./NavBar.Finances";
import axios from "axios";
import {serverUrl} from "../config";
import {MDBTable, MDBTableHead} from "mdbreact";

class FinancePerRoute extends Component {
    constructor(props) {

        super(props);
        this.state = {

            trips: [],
            routeInfo:[],
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

    //retrieving username from users table
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

    //retrieving bus reg no from buses table
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

    //retrieving bus route no from routes table
    getRouteNo(id){
        axios
            .get(serverUrl + "/routes/" + id)
            .then((response) => {
                this.setState({
                    routeInfo: response.data,
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
                <div className="container" style={{maxWidth: "90%"}}>
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardBody>
                                    <MDBTable hover>
                                        <MDBTableHead className="text-primary">
                                            <tr>
                                                <th>Bus Route Id</th>
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
                                                        <td>{item["routeNo"]}</td>
                                                        <td className="text-center">{new Intl.DateTimeFormat("en-GB", {
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
            </div>
        );
    }
}

export default FinancePerRoute;

