import React, {Component} from 'react';
import axios from "axios";
import {serverUrl, TOKEN_ID} from "../config";
import {MDBTable, MDBTableHead} from "mdbreact";
import {Card, CardBody, Col, Row} from "reactstrap";

class FinesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fines: [],
        };
    }

    componentDidMount() {
        axios
            .get(serverUrl + "/fines")
            .then((response) => {
                this.setState({
                    fines: response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    fineList() {
        return this.state.fines.map(function (obj, i) {

            if (obj.paidOrNot === true) {
                obj.userID = "Paid";
            } else {
                obj.userID = "Not Paid";
            }
            return (
                <tr className="text-center" key={i}>
                    <td>{obj._id}</td>
                    <td className="text-center">Rs. {obj.fine}.00</td>
                    <td className="text-center"><span className="badge badge-pill badge-primary">{obj.userID}</span></td>
                    <td>
                        <a
                            href={"/payFine/" + obj._id}
                            className="btn btn-outline-primary btn-sm"
                        >
                            Pay
                        </a>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 30 , maxWidth: "90%"}}>
                <h3 align="center">Fine List</h3>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <MDBTable hover>
                                    <MDBTableHead className="text-primary">
                                        <tr className="text-center">
                                            <th>Fine ID</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </MDBTableHead>
                                    <tbody>
                                    {this.fineList()}
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

export default FinesList;
