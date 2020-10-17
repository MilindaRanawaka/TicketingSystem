import React, {Component} from 'react';
import axios from "axios";
import {serverUrl} from "../config";
import {MDBTable, MDBTableHead} from "mdbreact";
import {Card, CardBody} from "reactstrap";

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

    tripList() {
        return this.state.trips.map(function (obj, i) {
            return (
                <tr className="text-center" key={i}>
                    <td>{obj.startLocation} to {obj.endLocation}</td>
                    <td className="text-center">{obj.routeNo}</td>
                    <td className="text-center">{obj.busRegNo}</td>
                    <td className="text-center">{obj.distance}</td>
                    <td className="text-center">Rs. {obj.charge}.00</td>
                </tr>
            );
        });
    }

    render() {
        return (

            <div className="container" style={{ marginTop: 30 , maxWidth: "75%"}}>
                <h3 align="center"><b>Trip History</b></h3>
                        <Card>
                            <CardBody>
                                <MDBTable hover>
                                    <MDBTableHead className="text-primary">
                                        <tr className="text-center">
                                            <th>Locations</th>
                                            <th>Route</th>
                                            <th>Bus</th>
                                            <th>Distance</th>
                                            <th>Charge</th>
                                        </tr>
                                    </MDBTableHead>
                                    <tbody>
                                    {this.tripList()}
                                    </tbody>
                                </MDBTable>
                            </CardBody>
                        </Card>
            </div>
        );
    }
}

export default TripHistory;
