import React from "react";
import {Bar, Pie} from "react-chartjs-2";
import {MDBCard, MDBCardBody, MDBContainer} from "mdbreact";
import PassengerTripNavBar from "./NavBar.PassengerTrips";
import {Col, Row} from "react-bootstrap";
import axios from "axios";
import {serverUrl} from "./config";

class StatisticsPassengerTrips extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            userByType:{}
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

        let categories =['Admin', 'Inspector', 'Passenger'];

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
                        "#949FB1",
                        "#4D5360",
                        "#AC64AD"
                    ],
                    hoverBackgroundColor: [
                        "#A8B3C5",
                        "#616774",
                        "#DA92DB"
                    ]
                }]
            }
        })
    }

    render() {
        return (
                <div className="content">
                    <PassengerTripNavBar/>
                    <Row>
                        <Col xs="6">
                            <br/>
                            <MDBCard style={{ width: "40rem" }}>
                                <MDBCardBody>
                                    <h3 className="mt-5">User count by User Type</h3>
                                    <Pie data={this.state.userByType} options={{ responsive: true }} />
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                        <Col xs="6">
                            <br/>
                            <MDBCard style={{ width: "40rem" }}>
                                <h3 className="mt-5">User count by User Type</h3>
                                <Bar data={this.state.userByType}  options={{
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true
                                            }
                                        }]
                                    }
                                }} />
                            </MDBCard>
                        </Col>
                    </Row>

                    {/*<div className="container">*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col">*/}
                    {/*            <div className="col statistics">*/}
                    {/*                <h3>User count by type</h3>*/}
                    {/*                <Bar data={this.state.userByType}*/}
                    {/*                     options={{*/}
                    {/*                         scales: {*/}
                    {/*                             yAxes: [{*/}
                    {/*                                 ticks: {*/}
                    {/*                                     beginAtZero: true*/}
                    {/*                                 }*/}
                    {/*                             }]*/}
                    {/*                         }*/}
                    {/*                     }}/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col">*/}
                    {/*            <Pie data={this.state.userByType} options={{ responsive: true }} />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
        );
        /*
        return (
            <div className="content">
                <PassengerTripNavBar/>
                <Row>
                    <Col xs="6">
                        <br/>
                        <MDBCard style={{ width: "40rem" }}>
                            <MDBCardBody>
                                <h3 className="mt-5" >Passenger Count for Bus Routes</h3>
                                <Pie data={this.state.dataPie} options={{ responsive: true }} />
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                    <Col xs="6">
                        <br/>
                        <MDBCard style={{ width: "40rem" }}>
                            <h3 className="mt-5">Passenger Count for Buses</h3>
                            <Bar data={this.state.dataPie} options={{ responsive: true }} />
                        </MDBCard>
                    </Col>
                </Row>
            </div>
        );*/
    }
}

export default StatisticsPassengerTrips;

