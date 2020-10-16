import React from "react";
import {Bar, Doughnut, HorizontalBar, Pie} from "react-chartjs-2";
import { Grid, Row, Col } from "react-bootstrap";
import {MDBCard, MDBCardBody, MDBContainer} from "mdbreact";
import FinanceNavBar from "./NavBar.Finances";

class StatisticsFinances extends React.Component {
    state = {
        activeItem: "4"
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
                <FinanceNavBar/>
                <Row>
                <Col xs="6">
                    <br/>
                <MDBCard style={{ width: "40rem" }}>
                    <MDBCardBody>
                <h3 className="mt-5">Income per each bus route</h3>
                <Pie data={this.state.dataPie} options={{ responsive: true }} />
                        </MDBCardBody>
                </MDBCard>
                    </Col>
                    <Col xs="6">
                        <br/>
                        <MDBCard style={{ width: "40rem" }}>
                            <h3 className="mt-5">Income per day</h3>
                            <Bar data={this.state.dataPie} options={{ responsive: true }} />
                        </MDBCard>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6">
                        <br/>
                        <MDBCard style={{ width: "40rem" }}>
                            <MDBCardBody>
                                <h3 className="mt-5">Chart 3</h3>
                                <HorizontalBar  data={this.state.dataPie} options={{ responsive: true }} />
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                    <Col xs="6">
                        <br/>
                        <MDBCard style={{ width: "40rem" }}>
                            <h3 className="mt-5">Chart 4</h3>
                            <Doughnut  data={this.state.dataPie} options={{ responsive: true }} />
                        </MDBCard>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default StatisticsFinances;

