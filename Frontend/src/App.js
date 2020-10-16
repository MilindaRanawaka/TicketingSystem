import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import PublicRoute from "./Components/ReactMiddleware/PublicRoute";
import Login from "./Components/Login&Register/Login";
import PassengerHomepage from "./Components/HomePage.Passenger";
import PrivateRoute from "./Components/ReactMiddleware/PrivateRoute";
import Navbar from "./Components/Navbar";
import 'antd/dist/antd.css';
import AdminHomepage from "./Components/HomePage.Admin";
import InspectorHomepage from "./Components/HomePage.Inspector";
import FinancePerDate from "./Components/PerDay.Finances";
import FinancePerRoute from "./Components/PerRoute.Finances";
import FinancePerBus from "./Components/PerBus.Finances";
import StatisticsFinances from "./Components/Statistics.Finances";
import PassengerRoute from "./Components/Passenger_Route.Passenger";
import RoutePassenger from "./Components/Route_Passenger.Passenger";
import PassengerDate from "./Components/Passenger_Date.Passenger";
import StatisticsPassengerTrips from "./Components/StatisticsTrip.Passenger";
import Register from "./Components/Login&Register/Register";
import Footer from "./Components/Footer";
import AddCredit from "./Components/Passenger/AddCredit";
import PayFine from "./Components/Passenger/PayFine";
import AddFineInspector from "./Components/Inspector/addfine"


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <Container maxWidth={false} style={{ marginTop: 90, paddingLeft: 0, paddingRight: 0 }}>
            <Switch>

              {/*All the Public Routes of System*/}
              <PublicRoute restricted={true} component={Login} path="/" exact />
              <PublicRoute restricted={true} component={Login} path="/login" exact />
              <PublicRoute restricted={true} component={Register} path="/register" exact />

              {/*Admin(Public Transport Manager) Only Routes*/}
              <PrivateRoute component={AdminHomepage} AccessBy={"admin"} path="/adminHome" exact />
              {<PrivateRoute component={FinancePerDate} AccessBy={"admin"} path="/financeHome" exact />}
              {<PrivateRoute component={FinancePerRoute} AccessBy={"admin"} path="/financeRoute" exact />}
              {<PrivateRoute component={FinancePerBus} AccessBy={"admin"} path="/financeBus" exact />}
              {/*{<PrivateRoute component={FinancePerPassengerFine} AccessBy={"admin"} path="/financeFine" exact />}*/}
              {<PrivateRoute component={StatisticsFinances} AccessBy={"admin"} path="/financeStat" exact />}
              {<PrivateRoute component={PassengerRoute} AccessBy={"admin"} path="/passengertrips" exact />}
              {<PrivateRoute component={RoutePassenger} AccessBy={"admin"} path="/route-passenger" exact />}
              {<PrivateRoute component={PassengerDate} AccessBy={"admin"} path="/passenger-date" exact />}
              {<PrivateRoute component={StatisticsPassengerTrips} AccessBy={"admin"} path="/passengerStat" exact />}

              {/*Ticket Inspector Only Routes*/}
              <PrivateRoute component={InspectorHomepage} AccessBy={"inspector"} path="/inspectorHome" exact />
              <PrivateRoute component={AddFineInspector} AccessBy={"inspector"} path="/addFine" exact />

              {/*Passenger Only Routes*/}
              <PrivateRoute component={PassengerHomepage} AccessBy={"passenger"} path="/passengerHome" exact />
              <PrivateRoute component={AddCredit} AccessBy={"passenger"} path="/addCredit" exact />
              <PrivateRoute component={PayFine} AccessBy={"passenger"} path="/payFine" exact />

            </Switch>
          </Container>
          {/*<Footer />*/}
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
