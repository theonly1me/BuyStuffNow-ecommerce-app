import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const Free = () => {
  return (
    <Grid container>
      <Grid item sm={2}></Grid>
      <Grid item sm={8} style={{ textAlign: 'center' }}>
        <Typography style={{ margin: '50px 0' }} variant="h6">
          You don't need to pay, take all the items for free! 🥳
        </Typography>
      </Grid>
      <Grid item sm={2}></Grid>
    </Grid>
  );
};

export default Free;
