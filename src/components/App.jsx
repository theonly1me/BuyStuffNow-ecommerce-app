import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import ShoppingList from './ShoppingList';
import ShoppingCart from './ShoppingCart';
import Login from './Login';
import Footer from './Footer';

import Header from './Header';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Route path="/" exact>
            <ShoppingList />
          </Route>
          <Route path="/checkout" exact>
            <ShoppingCart />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
