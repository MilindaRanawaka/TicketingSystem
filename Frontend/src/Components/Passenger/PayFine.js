import React from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {serverUrl, TOKEN_ID, TOKEN_UNAME} from "../config";

toast.configure();

//Pay Fine
export default class PayFine extends React.Component {
    constructor(props) {
        super(props);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            balance: 0,
            payingValue: 0,
            fine: 0,
            tripID:"",
            Location:""
        };

    }


    
    componentDidMount() {

        axios
            .get(serverUrl + "/fines/" + this.props.match.params.id)
            .then((response) => {

                this.setState({
                    fine: response.data.fine,
                    tripID: response.data.tripID,
                    Location: response.data.Location,

                });

            })
            .catch(function (error) {
                console.log(error);
            });

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
            balance: parseInt(this.state.balance)-parseInt(this.state.fine)
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

        const fines = {
            paidOrNot: "Paid",
        };

        axios
            .post(serverUrl + "/fines/editFine/"+this.props.match.params.id, fines)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error.response);
                toast("Pay Fine Failed"+this.props.match.params.id);

            });

        window.location='/passengerHome';
    }

    render() {
        return (
            <div className="container" style={{ maxWidth: "30%", marginTop: 100}}>
                <div className=" h-100">
                    <h3 align="center">Pay Fine</h3><br/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Full Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="numberHelp"
                                           value={localStorage.getItem(TOKEN_UNAME)}
                                           disabled/>
                                </div><br/>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Trip ID</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="numberHelp"
                                           value={this.state.tripID}
                                           disabled/>
                                </div><br/>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Locations</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="numberHelp"
                                           value={this.state.Location}
                                           disabled/>
                                </div><br/>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Fine Amount</label>
                                    <input type="number" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="numberHelp"
                                           value={this.state.fine}
                                           disabled/>
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
