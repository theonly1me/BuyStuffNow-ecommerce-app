import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Badge,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import useStyles from '../utils/styles';

const Header = ({ state, logout }) => {
  const classes = useStyles();
  let loggedIn = false;
  if (state && state?.shop?.user) {
    loggedIn = true;
  }
  const history = useHistory();
  const handleLogout = () => {
    logout();
    history.push('/');
  };

  return (
    <div className={classes.header}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.headerTitle}
            component={Link}
            to="/"
          >
            Buy Stuff Now
          </Typography>
          <IconButton
            color="secondary"
            style={{ marginRight: 20 }}
            component={Link}
            to="/checkout"
          >
            {state?.shop?.user ? (
              <Badge
                badgeContent={state?.shop?.cart?.length || 0}
                variant="dot"
                color="secondary"
              >
                <ShoppingCartIcon />
              </Badge>
            ) : null}
          </IconButton>
          {!loggedIn ? (
            <Button
              color="secondary"
              variant="text"
              component={Link}
              to="/login"
            >
              Login
            </Button>
          ) : (
            <Button color="secondary" variant="text" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps, actions)(Header);
