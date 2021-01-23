import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

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
  const currentItem = state?.shop?.cart?.find(el => el.id === item.id);
  return (
    <ListItem key={item.id}>
      <IconButton
        style={{ backgroundColor: 'transparent' }}
        color="secondary"
        component={Link}
        to={{
          pathname: `/details/${item.id}`,
          state: { item },
        }}
      >
        <ListItemAvatar>
          <Avatar>
            <ItemIcon />
          </Avatar>
        </ListItemAvatar>
      </IconButton>
      <ListItemText
        primary={item.name}
        secondary={`${item.price} - In Cart: ${
          currentItem?.quantity ? currentItem?.quantity : 0
        }`}
      />
      {state && state?.shop?.user ? (
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
      ) : null}
    </ListItem>
  );
};

const mapStateToProps = state => {
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(ListItemComponent);
