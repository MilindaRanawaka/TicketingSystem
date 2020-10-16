import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {Card, CardBody, Col, Row, Table} from "reactstrap";
import PassengerTripNavBar from "./NavBar.PassengerTrips";


class PassengerRoute extends Component {
    // state = {
    //     isOpen: false
    // };
    //
    // toggleCollapse = () => {
    //     this.setState({ isOpen: !this.state.isOpen });
    // }

    render() {
        return (
            <div className="content">
                <PassengerTripNavBar/>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                    <tr>
                                        <th>Passenger Id</th>
                                        <th>Bus Route</th>
                                        <th>Trip Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Dakota Rice</td>
                                        <td>Niger</td>
                                        <td>15-Oct-2020</td>

                                    </tr>
                                    <tr>
                                        <td>Minerva Hooper</td>
                                        <td>Curaçao</td>
                                        <td>15-Oct-2020</td>

                                    </tr>
                                    <tr>
                                        <td>Sage Rodriguez</td>
                                        <td>Netherlands</td>
                                        <td>15-Oct-2020</td>
                                    </tr>
                                    <tr>
                                        <td>Philip Chaney</td>
                                        <td>Korea, South</td>
                                        <td>15-Oct-2020</td>
                                    </tr>
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

export default PassengerRoute;

