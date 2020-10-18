import React from "react";
import {Bar, Pie} from "react-chartjs-2";
import { Row, Col } from "react-bootstrap";
import {MDBCard, MDBCardBody} from "mdbreact";
import FinanceNavBar from "./NavBar.Finances";
import axios from "axios";
import {serverUrl} from "../config";

class StatisticsFinances extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            trips:[],
            Charges:[],
            BCharges:[],
            Rid:[],
            Bid:[],
            incomePerBus:[],
            incomePerRoute:[],
            routes:[],
            buses:[],
        }

    }


    componentDidMount() {

        axios.get(serverUrl+"/routes/")
            .then(response => {
                console.log(response.data);
                this.setState({
                    routes: response.data,
                })

            })

        axios.get(serverUrl+"/buses/")
            .then(response => {
                console.log(response.data);
                this.setState({
                    buses: response.data,
                })

            })

        axios.get(serverUrl+"/trips/")
            .then(response => {
                console.log(response.data);
                this.setState({
                    trips: response.data,
                })

                const tripSet = response.data;
                this.routeType(tripSet);
                this.busType(tripSet);

            })



    }


    //getting all the routes and their respective total fare charges
    routeType(routeData) {

        let Type = [];
        let TypeCounts = [];
        routeData.forEach(element => {
            if (Type.indexOf(element.routeID) === -1) {
                Type.push(element.routeID);
            }
        });

        console.log(Type);

        let result = [];
        routeData.reduce(function (res, value) {
            if (!res[value.routeID]) {
                res[value.routeID] = {routeID: value.routeID, charge: 0};
                result.push(res[value.routeID])
            }
            res[value.routeID].charge += value.charge;
            console.log(res);
            return res;
        }, {});

        console.log(result[0].charge);


        let charges = [];
        let rid = [];

        let rNames = [];
        result.map(resarr => {
            charges.push(resarr.charge);
            rid.push(resarr.routeID);

        })

        this.state.routes.map(r => {
            console.log(r.routeNo);
            rid.map(roid => {
                if (roid === r._id) {
                    rNames.push(r.routeNo);
                }
            })
        })

        if (result != null) {
            this.setState({
                Charges: charges,
                Rid: rid,
                incomePerRoute: {
                    labels: rNames,
                    datasets: [{
                        data: charges,
                        label: 'Total Charge',
                        backgroundColor: [
                            '#bc5090',
                            '#ef5675',
                            '#ff764a',
                            '#ffa600',
                            '#003f5c',
                            '#7a5195'
                        ],
                        hoverBackgroundColor: [
                            '#bc5090',
                            '#ef5675',
                            '#ff764a',
                            '#ffa600',
                            '#003f5c',
                            '#7a5195'
                        ]
                    }]
                }
            })
        }
    }

 //getting all the buses and their respective total fare charges
    busType(busData) {

        let bType = [];
        let TypeCounts = [];
        busData.forEach(element => {
            if (bType.indexOf(element.busID) === -1) {
                bType.push(element.busID);
            }
        });

        console.log(bType);

        let bresult = [];
        busData.reduce(function (res, value) {
            if (!res[value.busID]) {
                res[value.busID] = {busID: value.busID, charge: 0};
                bresult.push(res[value.busID])
            }
            res[value.busID].charge += value.charge;
            console.log(res);
            return res;
        }, {});

        console.log(bresult[0].charge);


        let bcharges = [];
        let bid = [];
        let bRegNo = [];

        bresult.map(resarr => {
            bcharges.push(resarr.charge);
            bid.push(resarr.busID);

        })

        this.state.buses.map(r => {
            console.log(r.regNo);
            bid.map(buid => {
                if (buid === r._id) {
                    bRegNo.push(r.regNo);
                }
            })
        })

        if (bresult != null) {
            this.setState({
                BCharges: bcharges,
                Bid: bid,
                incomePerBus: {
                    labels: bRegNo,
                    datasets: [{
                        data: bcharges,
                        label: 'Total Charge',
                        backgroundColor: [
                            '#ff764a',
                            '#ffa600',
                            '#bc5090',
                            '#ef5675',
                            '#003f5c',
                            '#7a5195'
                        ],
                        hoverBackgroundColor: [
                            '#ff764a',
                            '#ffa600',
                            '#bc5090',
                            '#ef5675',
                            '#003f5c',
                            '#bc5090',
                            '#ef5675',
                            '#7a5195'
                        ]
                    }]
                }
            })
        }
    }

    render() {
        return (
            <div className="content">
                <FinanceNavBar/>
                <div className="container" style={{maxWidth: "90%"}}>
                    <Row>
                        <Col xs="6">
                            <br/>
                            <MDBCard style={{width: "40rem"}}>
                                <MDBCardBody>
                                    <h3 className="text-center">Fare Income per Each Bus </h3>
                                    <Pie data={this.state.incomePerBus}/>
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                        <Col xs="6">
                            <br/>
                            <MDBCard style={{width: "42rem"}}>
                                <h3 className="text-center">Fare Income per Each Bus Route</h3>
                                <Bar data={this.state.incomePerRoute}
                                     options={{
                                         scales: {
                                             yAxes: [{
                                                 ticks: {
                                                     beginAtZero: true
                                                 }
                                             }]
                                         }
                                     }}
                                />
                            </MDBCard>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default StatisticsFinances;

