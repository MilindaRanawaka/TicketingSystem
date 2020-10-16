import React from "react";
import {Bar, Pie} from "react-chartjs-2";
import {MDBCard, MDBCardBody, MDBContainer} from "mdbreact";
import PassengerTripNavBar from "./NavBar.PassengerTrips";
import {Col, Row} from "react-bootstrap";

class StatisticsPassengerTrips extends React.Component {
    state = {
        activeItem: "1"
    }
    state = {
        dataPie: {
            labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
            datasets: [
                {
                    data: [300, 50, 100, 40, 120],
                    backgroundColor: [
                        "#F7464A",
                        "#46BFBD",
                        "#FDB45C",
                        "#949FB1",
                        "#4D5360",
                        "#AC64AD"
                    ],
                    hoverBackgroundColor: [
                        "#FF5A5E",
                        "#5AD3D1",
                        "#FFC870",
                        "#A8B3C5",
                        "#616774",
                        "#DA92DB"
                    ]
                }
            ]
        }
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
        );
    }
}

export default StatisticsPassengerTrips;

