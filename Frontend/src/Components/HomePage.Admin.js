import React from 'react';
import {serverUrl, TOKEN_UNAME} from "./config";
import axios from "axios";
import {Col, Row} from "react-bootstrap";
import {MDBCard} from "mdbreact";
import {Bar} from "react-chartjs-2";

export default class AdminHomepage extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            userByType: {},
        }
    }

    componentDidMount() {

        axios.get(serverUrl + "/users")
            .then(response => {
                this.setState({
                    users: response.data,
                })

                const userSet = response.data;
                this.userByType(userSet);

            })
    }
    userByType(userData) {

        let Type= [];
        let TypeCounts =[];
        userData.forEach(element => {
            if (Type.indexOf(element.type) === -1) {
                Type.push(element.type);
            }
        });

        let usersByType= userData.reduce((countData, user, index) => {
            if (!!countData[user.type]) {
                countData[user.type] += 1;
            } else {
                countData[user.type] = 1;

            }

            return countData;
        }, {})
        TypeCounts = Object.keys(usersByType).map(user =>{

            return usersByType[user]
        })

        let categories =['Public Transport Manager (Admin)', 'Ticket Inspector', 'Passenger'];

        /*
        Level.map(l =>{
            switch (l) {
                case 1: categories.push('admin');break;
                case 2: categories.push('inspector');break;
                case 3: categories.push('passenger');break;

            }
        })
         */


        this.setState({
            loading:false,
            userByType : {
                labels: categories,
                datasets: [{
                    label:'Count',
                    data:TypeCounts,
                    backgroundColor: [
                        '#bc5090',
                        '#ef5675',
                        '#003f5c',
                    ],
                    hoverBackgroundColor: [
                        '#bc5090',
                        '#ef5675',
                        '#003f5c',
                    ]
                }]
            }
        })
    }

    render() {
        return (
            <div className="container">
                <h1 align="center"> <span className="badge badge-dark">
                    Welcome Admin {localStorage.getItem(TOKEN_UNAME)}
                </span></h1>
                        <br/>

                            <h3 className="mt-5">User Count by User Type</h3>
                            <Bar data={this.state.userByType}  options={{
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            }} />



            </div>
        );
    }
}
