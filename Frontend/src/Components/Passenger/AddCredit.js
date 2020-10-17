import React from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {serverUrl, TOKEN_ID} from "../config";

toast.configure();

//Add Passenger of the System
export default class AddCredit extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            balance: 0,
            addingValue: 0,
            userID:"",
            cardHolderName:"",
            cardNumber:"",
            expireDate:"",
            cvvNumber:"",
        };

    }

    updateInput(key, value) {
        this.setState({
            [key]: value,
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
            balance: parseInt(this.state.balance)+parseInt(this.state.addingValue)
        };

        axios
            .post(serverUrl + "/users/addCredit/"+localStorage.getItem(TOKEN_ID), users)
            .then((res) => {
                console.log(res.data);
                toast("Passenger Added Successful!");
            })
            .catch((error) => {
                console.log(error.response);
                toast("Add credit Failed"+this.props.match.params.id);

            });

        const Credit = {
            userID: localStorage.getItem(TOKEN_ID),
            cardHolderName: this.state.cardHolderName,
            cardNumber: this.state.cardNumber,
            expireDate: this.state.expireDate,
            cvvNumber: this.state.cvvNumber,
            amount: this.state.addingValue
        };

        axios
            .post(serverUrl + "/credits/add", Credit)
            .then((res) => console.log(res.data));

        this.setState({
            cardHolderName: "",
            cardNumber: "",
            expireDate: "",
            cvvNumber: "",
            addingValue: 0
        });

        window.location='/passengerHome';
    }

    render() {
        return (
            <div className="container" style={{ maxWidth: "30%"}}>
                <h3 align="center"><b>Add Credit to Account</b></h3><br/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className="control-label">Card Type</label>
                        <div className="row">
                            <div className="col-md-auto">
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        id="creditRadio"
                                        name="cardType"
                                        value="CreditCard"
                                        onChange={(e) =>
                                            this.updateInput("cardType", e.target.value)
                                        }
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Credit Card
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-auto">
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        id="debitRadio"
                                        name="cardType"
                                        value="DebitCard"
                                        onChange={(e) =>
                                            this.updateInput("cardType", e.target.value)
                                        }
                                    />
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        Debit Card
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Card Holder Name</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Card Holder Name"
                               value={this.state.cardHolderName}
                               onChange={(e) =>
                                   this.updateInput("cardHolderName", e.target.value)
                               }
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Card Number</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Card Number"
                               value={this.state.cardNumber}
                               onChange={(e) =>
                                   this.updateInput("cardNumber", e.target.value)
                               }
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Expire Date</label>
                        <input type="month"
                               className="form-control"
                               placeholder="mm/yyyy"
                               value={this.state.expireDate}
                               onChange={(e) =>
                                   this.updateInput("expireDate", e.target.value)
                               }
                               required/>
                    </div>
                    <div className="form-group">
                        <label>CVV Number</label>
                        <input type="text"
                               className="form-control"
                               placeholder="CVV Number"
                               value={this.state.cvvNumber}
                               onChange={(e) =>
                                   this.updateInput("cvvNumber", e.target.value)
                               }
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input type="number"
                               className="form-control"
                               placeholder="Amount"
                               value={this.state.addingValue}
                               onChange={(e) =>
                                   this.updateInput("addingValue", e.target.value)
                               }
                               required/>
                    </div>

                    <br/>
                    <div className="container" style={{ width: 300 }}>
                        <button type="submit" className="btn btn-primary btn-block"><b>Confirm</b></button>
                    </div>
                    <br/><br/>
                </form>
            </div>
        );
    }
}
