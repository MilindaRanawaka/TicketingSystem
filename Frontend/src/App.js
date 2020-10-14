import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import PublicRoute from "./Components/ReactMiddleware/PublicRoute";
import Login from "./Components/Login&Register/Login";
import CustomerHomepage from "./Components/HomePage.Customer";
import PrivateRoute from "./Components/ReactMiddleware/PrivateRoute";
import Navbar from "./Components/Navbar";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <Container maxWidth={false} style={{ marginTop: 130, paddingLeft: 0, paddingRight: 0 }}>
            <Switch>

              {/*All the Public Routes of System*/}
              <PublicRoute restricted={true} component={Login} path="/" exact />
              <PublicRoute restricted={true} component={Login} path="/login" exact />
              {/*<PublicRoute restricted={true} component={CreateUser} path="/create-acc" exact />*/}

              {/*Admin(Public Transport Manager) Only Routes*/}
              {/*<PrivateRoute component={AdminHome} AccessBy={"admin"} path="/admin" exact />*/}

              {/*Ticket Inspector Only Routes*/}
              {/*<PrivateRoute component={CardViewProductListComponent} AccessBy={"storeManager"} path="/storeManager" exact />*/}

              {/*Customer Only Routes*/}
              <PrivateRoute component={CustomerHomepage} AccessBy={"customer"} path="/customerHome" exact />

            </Switch>
          </Container>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
