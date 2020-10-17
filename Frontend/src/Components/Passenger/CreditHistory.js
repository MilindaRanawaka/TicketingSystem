import React, {Component} from 'react';
import axios from "axios";
import {serverUrl} from "../config";
import {MDBTable, MDBTableHead} from "mdbreact";
import {Card, CardBody} from "reactstrap";

//View Passenger Credit history
class CreditHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            credits: [],
        };
    }

    componentDidMount() {
        axios
            .get(serverUrl + "/credits")
            .then((response) => {
                this.setState({
                    credits: response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    creditList() {
        return this.state.credits.map(function (obj, i) {
            return (
                <tr className="text-center" key={i}>
                    <td>{obj.cardHolderName}</td>
                    <td className="text-center">{obj.cardNumber}</td>
                    <td className="text-center">{obj.expireDate}</td>
                    <td className="text-center">{obj.amount}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 30 , maxWidth: "75%"}}>
                <br/><br/><br/><br/><h3 align="center"><b>Credit History</b></h3><br/>
                <Card>
                    <CardBody>
                        <MDBTable hover>
                            <MDBTableHead className="text-primary">
                                <tr className="text-center">
                                    <th>Card Holder Name</th>
                                    <th>Card Number</th>
                                    <th>Expire Date</th>
                                    <th>Amount</th>
                                </tr>
                            </MDBTableHead>
                            <tbody>
                            {this.creditList()}
                            </tbody>
                        </MDBTable>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default CreditHistory;
