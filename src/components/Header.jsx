import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import useStyles from '../utils/styles';

const Header = () => {
  const classes = useStyles();

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
            <ShoppingCartIcon />
          </IconButton>
          <Button
            color="secondary"
            variant="contained"
            component={Link}
            to="/login"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
