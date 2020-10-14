import React, { Component } from "react";
import { MDBContainer,MDBMask,MDBView } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import {Card, CardBody, Col, Row, Table} from "reactstrap";
import FinanceNavBar from "./NavBar.Finances";

class FinancePerDate extends Component {
    // state = {
    //     isOpen: false
    // };
    //
    // toggleCollapse = () => {
    //     this.setState({ isOpen: !this.state.isOpen });
    // }
    state = {
        activeItem: "1"
    }

    render() {
        return (
                        <div className="content">
                <FinanceNavBar/>
            <Row>
                <Col md="12">
                    <Card>
                        <CardBody>
                            <Table responsive>
                                <thead className="text-primary">
                                <tr>
                                    <th>Trip Date</th>
                                    <th>User Id</th>
                                    <th>Charge</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Dakota Rice</td>
                                    <td>Niger</td>
                                    <td>Oud-Turnhout</td>

                                </tr>
                                <tr>
                                    <td>Minerva Hooper</td>
                                    <td>Curaçao</td>
                                    <td>Sinaai-Waas</td>

                                </tr>
                                <tr>
                                    <td>Sage Rodriguez</td>
                                    <td>Netherlands</td>
                                    <td>Baileux</td>
                                </tr>
                                <tr>
                                    <td>Philip Chaney</td>
                                    <td>Korea, South</td>
                                    <td>Overland Park</td>
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

export default FinancePerDate;

