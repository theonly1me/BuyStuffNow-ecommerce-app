import React, { lazy, Suspense } from 'react';
import data from '../utils/data';
import { Paper, Grid, List, Typography, Divider } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from '../utils/styles';

const ListItem = lazy(() => import('./ListItem'));

const renderItems = data => {
  const items = data.map(item => {
    return (
      <React.Fragment key={item.id}>
        <Suspense
          fallback={<Skeleton variant="text" width={700} height={100} />}
        >
          <ListItem item={item} />
          <Divider />
        </Suspense>
      </React.Fragment>
    );
  });

  return <>{items}</>;
};

const ShoppingList = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item sm={2}></Grid>
      <Grid item sm={8}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h4">Products</Typography>
          <List>{renderItems(data)}</List>
        </Paper>
      </Grid>
      <Grid item sm={2}></Grid>
    </Grid>
  );
};

export default ShoppingList;
