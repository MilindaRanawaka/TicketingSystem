import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <Container maxWidth={false} style={{ marginTop: 30, paddingLeft: 0, paddingRight: 0 }}>
            <Switch>

              {/*All the Public Routes of System*/}
              <PublicRoute restricted={true} component={Login} path="/login" exact />
              <PublicRoute restricted={true} component={CreateUser} path="/create-acc" exact />

              {/*Admin(Public Transport Manager) Only Routes*/}
              <PrivateRoute component={AdminHome} AccessBy={"admin"} path="/admin" exact />

              {/*Ticket Inspector Only Routes*/}
              <PrivateRoute component={CardViewProductListComponent} AccessBy={"storeManager"} path="/storeManager" exact />

              {/*Customer Only Routes*/}
              <PrivateRoute component={WishList} AccessBy={"customer"} path="/wishList" exact />

            </Switch>
          </Container>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
