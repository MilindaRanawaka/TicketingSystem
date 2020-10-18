import React from 'react';
import {serverUrl, TOKEN_UNAME} from "../config";
import axios from "axios";
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

    //retrieving all users by user type
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
                <div className="col" >
                    <h1 style={{fontWeight: 'bold', color: '#0078d4', paddingTop: 30, paddingLeft: 120,}}>
                        Public Transport Manager Dashboard
                    </h1>
                    <h4 style={{fontWeight: 'bold', paddingTop: 30, paddingLeft: 120,}}>
                        Welcome {localStorage.getItem(TOKEN_UNAME)}
                    </h4>
                </div>
                <div className="container" style={{maxWidth: "80%"}}>
                    <h3 className="mt-5">User Count by User Type</h3>
                    <Bar data={this.state.userByType} options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}/>
                </div>
            </div>
        );
    }
}
