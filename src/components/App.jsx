import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import ShoppingList from './ShoppingList';
import ShoppingCart from './ShoppingCart';
import Login from './Login';
import Footer from './Footer';

import Header from './Header';
import Free from './Free';
import ItemDetails from './ItemDetails';
import { connect } from 'react-redux';

const App = ({ state }) => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Route path="/" exact>
            <ShoppingList />
          </Route>
          {state?.shop?.user ? (
            <Route path="/checkout" exact>
              <ShoppingCart />
            </Route>
          ) : null}
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/free" exact>
            <Free />
          </Route>
          <Route
            path="/details/:ID"
            render={props => <ItemDetails {...props} />}
          />
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
};

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(App);
