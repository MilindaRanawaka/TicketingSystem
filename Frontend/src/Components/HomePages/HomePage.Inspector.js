import React from 'react';
import { Card, CardBody, Col, Row } from "reactstrap";
import axios from "axios";
import { TOKEN_UNAME, serverUrl } from "../config";
import {MDBTable, MDBTableHead} from "mdbreact";

export default class InspectorHomepage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fine: [],
            userDetails: [],
            tripDetails: [],
            date: new Date(),
            fines: []
        };
    }

    componentDidMount() {
        //Fetching all Fine Data
        axios
            .get(serverUrl + "/fines/")
            .then((response) => {
                this.setState({
                    fines: response.data,
                });
            })
            .catch((error) => {
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
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 30 , maxWidth: "75%"}}>
                <div className="col" style={{paddingLeft: 20}}>
                    <h1 style={{fontWeight: 'bold', color: '#0078d4', paddingTop: 30}}>
                        Inspector Dashboard
                    </h1>
                    <h4 style={{fontWeight: 'bold', paddingTop: 30}}>
                        Welcome {localStorage.getItem(TOKEN_UNAME)}
                    </h4>
                </div>
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
