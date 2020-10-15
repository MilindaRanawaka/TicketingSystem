import React from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {serverUrl, TOKEN_ID} from "../config";

toast.configure();

//Add Credit of the System
export default class AddCredit extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeAddCredit = this.onChangeAddCredit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            balance: 0,
            addingValue: 0
        };

    }

    onChangeAddCredit(e) {
        this.setState({
            addingValue: e.target.value,
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
            .then((res) => console.log(res.data))
            .catch((error) => {
                console.log(error.response);
                toast("Add credit Failed"+this.props.match.params.id);

            });
        window.location='/passengerHome';
    }

    render() {
        return (
            <div className="container" style={{ maxWidth: "40%"}}>
                <div className=" h-100">
                    <h3 align="center">Add Credit</h3>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Adding Value</label>
                                    <input type="number" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="numberHelp"
                                           placeholder="Enter Value"
                                           onChange={this.onChangeAddCredit}/>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Add</button>
                            </form>
                        <br/>

                </div>
            </div>
        );
    }
}
