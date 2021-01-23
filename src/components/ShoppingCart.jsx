import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Divider,
} from '@material-ui/core';
import ItemIcon from '@material-ui/icons/FeaturedPlayList';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import useStyles from '../utils/styles';

const renderItems = (data, removeFromCart) => {
  const checkoutList = data.map(item => {
    return item.quantity ? (
      <>
        <ListItem key={item.id}>
          <ListItemAvatar>
            <Avatar>
              <ItemIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.name}
            secondary={`${item.price} x ${item.quantity}`}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="remove-from-cart"
              color="secondary"
              onClick={() => removeFromCart(item)}
            >
              <RemoveIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </>
    ) : null;
  });

  return checkoutList;
};

const ShoppingCart = ({ state, removeFromCart }) => {
  let data = [];
  if (state && state.shop && state.shop.cart) {
    data = [...state?.shop?.cart];
  }
  const totalCost = data.reduce(
    (acc, cur) => (acc += +cur.price.slice(1) * +cur.quantity),
    0
  );
  const classes = useStyles();
  const itemList = renderItems(data, removeFromCart);
  return (
    <Grid container className={classes.gridContainer}>
      <Grid item sm={2}></Grid>
      <Grid item sm={8}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h4">Checkout</Typography>
          <List>
            {itemList.length ? (
              itemList
            ) : (
              <Typography variant="h6">Oh so empty...</Typography>
            )}
          </List>
          {totalCost ? (
            <div style={{ textAlign: 'right' }}>
              <Typography
                style={{ marginBottom: 20 }}
                variant="h6"
              >{`Total Cost: $${totalCost}`}</Typography>
              <Button
                color="secondary"
                variant="contained"
                component={Link}
                to="/free"
              >
                Pay
              </Button>
            </div>
          ) : null}
        </Paper>
      </Grid>
      <Grid item sm={2}></Grid>
    </Grid>
  );
};
const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps, actions)(ShoppingCart);
