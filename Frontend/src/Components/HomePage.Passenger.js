import React from 'react';
import {serverUrl, TOKEN_ID, TOKEN_UNAME} from "./config";
import axios from "axios";
import TripHistory from "./Passenger/TripHistory";
import CardSection from "./Passenger/Card/CardSection";
import 'office-ui-fabric-react/dist/css/fabric.css';

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
            <div className="container" style={{ maxWidth: "100%"}}>
                <div className="row">
                    <div className="col" style={{paddingLeft: 30 }}>
                        <h1 style={{fontWeight: 'bold', color: '#0078d4', paddingTop: 30, paddingLeft: 220, }}>
                            Passenger Dashboard
                        </h1>
                        <h4 style={{fontWeight: 'bold', paddingTop: 30,  paddingLeft: 220,}}>
                            Welcome {localStorage.getItem(TOKEN_UNAME)}
                        </h4>
                    </div>
                    <div className="col">
                        <div className="ms-Grid-row">
                            <CardSection balance={this.state.balance}/>
                        </div>
                    </div>
                </div>
                <div className="ms-Grid-row">

                    <TripHistory/>
                </div>
            </div>
        );
    }
}
