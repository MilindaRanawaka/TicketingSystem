import React from 'react';
import {serverUrl, TOKEN_ID, TOKEN_UNAME} from "./config";
import axios from "axios";

export default class PassengerHomepage extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {
            balance: 0
        };

    }

    componentDidMount() {
        axios
            .get(serverUrl + "/users/" + localStorage.getItem(TOKEN_ID))
            .then((response) => {

                this.setState({
                    balance: response.data.balance,

                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                <h1 align="center"> <span className="badge badge-dark">
                    Welcome Passenger {localStorage.getItem(TOKEN_UNAME)}
                </span></h1>
                <br/>
                <h1 align="center"> <span className="badge badge-dark">
                    Your Account Balance is Rs. {this.state.balance}
                </span></h1>

            </div>
        );
    }
}
