import React, { Component } from "react";
import { MDBContainer, MDBMask, MDBView } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Card, CardBody, Col, Row, Table } from "reactstrap";
import axios from "axios";
import Calendar from 'react-calendar';
import { TOKEN_UNAME, serverUrl } from "../config";

export default class AddFineInspectorPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            routeID: "",
            busID: "",
            userID: "",
            startLocation: "",
            endLocation: "",
            charge: "",
            tripDateTime: "",
        }

    }

    componentDidMount() {
        axios
            .get(serverUrl + "/trip/" + this.props.match.params.id)
            .then((response) => {

                this.setState({
                    routeID: response.data.routeID,
                    busID: response.data.busID,
                    userID: response.data.userID,
                    startLocation: response.data.startLocation,
                    endLocation: response.data.endLocation,
                    charge: response.data.charge,
                    tripDateTime: response.data.tripDateTime,

                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">

            </div>
        );
    }


}