import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Paper, Typography, Divider, Button } from '@material-ui/core';
import useStyles from '../utils/styles';

const ItemDetails = props => {
  const history = useHistory();
  const handleBackClick = () => {
    history.push('/');
  };
  const {
    history: {
      location: {
        state: { item },
      },
    },
  } = props;
  const classes = useStyles;
  return (
    <Grid container className={classes.gridContainer}>
      <Grid item sm={2}></Grid>
      <Grid item sm={8}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h4">Product Details</Typography>
          <Divider style={{ marginBottom: 50 }} />
          <Typography variant="h5">{item.name}</Typography>
          <Typography variant="h6">{item.price}</Typography>
          <Typography variant="body2">{item.description}</Typography>
          <Button variant="text" color="secondary" onClick={handleBackClick}>
            &larr; Go Back
          </Button>
        </Paper>
      </Grid>
      <Grid item sm={2}></Grid>
    </Grid>
  );
};

export default ItemDetails;
