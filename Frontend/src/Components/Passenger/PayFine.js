import React from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {serverUrl, TOKEN_ID} from "../config";

toast.configure();

//Add Passenger of the System
export default class PayFine extends React.Component {
    constructor(props) {
        super(props);

        this.onChangePayFine = this.onChangePayFine.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            balance: 0,
            payingValue: 0
        };

    }

    onChangePayFine(e) {
        this.setState({
            payingValue: e.target.value,
        });
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

    onSubmit(e) {
        e.preventDefault();

        const users = {
            balance: parseInt(this.state.balance)-parseInt(this.state.payingValue)
        };

        axios
            .post(serverUrl + "/users/addCredit/"+localStorage.getItem(TOKEN_ID), users)
            .then((res) => {
                console.log(res.data);
                toast("Fine Payed Successful!");
            })
            .catch((error) => {
                console.log(error.response);
                toast("Pay Fine Failed"+this.props.match.params.id);

            });
        window.location='/passengerHome';
    }

    render() {
        return (
            <div className="container" style={{ maxWidth: "30%", marginTop: 150}}>
                <div className=" h-100">
                    <h3 align="center">Pay Fine</h3><br/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Paying Value</label>
                                    <input type="number" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="numberHelp"
                                           placeholder="Enter Value"
                                           onChange={this.onChangePayFine}/>
                                </div><br/>
                                <div className="container" style={{ width: 300 }}>
                                    <button type="submit" className="btn btn-primary btn-block"><b>Pay</b></button>
                                </div>
                            </form>
                        <br/>

                </div>
            </div>
        );
    }
}
