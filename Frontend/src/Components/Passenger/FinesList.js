import React, {Component} from 'react';
import axios from "axios";
import {serverUrl} from "../config";
import {MDBTable, MDBTableHead} from "mdbreact";
import {Card, CardBody, Col, Row} from "reactstrap";

class FinesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fines: [],
            paid: ""
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


              let paid = obj.paidOrNot;


            return (
                <tr className="text-center" key={i}>
                    <td>{obj._id}</td>
                    <td>{obj.Location}</td>
                    <td className="text-center">Rs. {obj.fine}.00</td>
                    <td className="text-center"><span className="badge badge-pill badge-primary">{paid}</span></td>
                    <td>{
                        paid === "Not Paid" ? (

                                <a
                                    href={"/payFine/" + obj._id}
                                    className="btn btn-outline-primary btn-sm"
                                >
                                    Pay
                                </a>


                        ): (
                            <button disabled className="btn btn-sm btn-outline-primary "
                                    type="submit">Pay</button>
                        )
                    }
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 30 , maxWidth: "75%"}}>
                <br/><h3 align="center"><b>Fines List</b></h3><br/>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <MDBTable hover>
                                    <MDBTableHead className="text-primary">
                                        <tr className="text-center">
                                            <th>Fine ID</th>
                                            <th>Locations</th>
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
