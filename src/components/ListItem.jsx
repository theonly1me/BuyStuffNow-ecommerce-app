import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import ItemIcon from '@material-ui/icons/FeaturedPlayList';
import AddToCartIcon from '@material-ui/icons/AddShoppingCart';

const ListItemComponent = ({ item, state, addToCart }) => {
  console.log(state);
  return (
    <ListItem key={item.id}>
      <ListItemAvatar>
        <Avatar>
          <ItemIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={item.name}
        secondary={`${item.price} - In Cart: ${
          item.quantity ? item.quantity : 0
        }`}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="add-to-cart"
          color="secondary"
          onClick={() => addToCart(item)}
        >
          <AddToCartIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(ListItemComponent);
