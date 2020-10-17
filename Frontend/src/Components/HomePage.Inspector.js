import React from 'react';
import { Card, CardBody, Col, Row, Table } from "reactstrap";
import axios from "axios";
import { TOKEN_UNAME, serverUrl } from "./config";

export default class InspectorHomepage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fine: [],
            userDetails: [],
            tripDetails: [],
            date: new Date(),
        };
    }

    componentDidMount() {
        //Fetching all Fine Data
        axios
            .get(serverUrl + "/fines/")
            .then((response) => {
                this.setState({
                    fine: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getUserName(id) {
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

    getTripName(id) {
        axios
            .get(serverUrl + "/trips/" + id)
            .then((response) => {
                this.setState({
                    tripDetails: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                <h1 align="center"> <span className="badge badge-dark">
                    Welcome Inspector {localStorage.getItem(TOKEN_UNAME)}
                </span></h1>
                <br />
                <Row>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <Table responsive striped>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>User Name</th>
                                            <th>Trip Info</th>
                                            <th>Fine</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.fine
                                            .map((item) => {
                                                return (
                                                    <tr key={item["_id"]}>
                                                        {this.getTripName(item["tripID"])}
                                                        {this.getUserName(item["userID"])}
                                                        <td>{item["userName"]}</td>
                                                        <td>{item["Location"]}</td>
                                                        <td>{item["fine"]}</td>
                                                        <td>{item["paidOrNot"]}</td>
                                                    </tr>
                                                );
                                            })}
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
