import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actions from '../actions';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Grid, Paper, Typography, Input, Button } from '@material-ui/core';
import useStyles from '../utils/styles';

const Login = ({ login }) => {
  const classes = useStyles();
  const history = useHistory();
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(4, `Username must be 'test'`)
        .required(`Username Required & Must be 'test'`),
      password: Yup.string()
        .min(7, `Password must be 'testpwd'`)
        .required(`Password Required & Must be 'testpwd'`),
    }),
    onSubmit: ({ username, password }) => {
      login({ username, password });
      history.push('/');
    },
  });

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item sm={4}></Grid>
      <Grid item sm={4}>
        <Paper style={{ padding: 50, textAlign: 'center' }}>
          <Typography variant="h4" style={{ marginBottom: 25 }}>
            Login
          </Typography>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Typography style={{ marginBottom: 20 }}>
              <Input
                value={values.username}
                onChange={handleChange}
                variant="outlined"
                id="username"
                placeholder="Username"
                error={touched.username && errors.username}
              />
              <br />
              {(touched.username && errors.username) ||
              values.username !== 'test' ? (
                <Typography color="secondary" variant="caption">
                  {errors.username}
                </Typography>
              ) : null}
            </Typography>
            <Typography style={{ marginBottom: 20 }}>
              <Input
                value={values.password}
                onChange={handleChange}
                variant="outlined"
                id="password"
                placeholder="Password"
                error={touched.password && errors.password}
                type="password"
              />
              <br />
              {(touched.password && errors.password) ||
              values.password !== 'testpwd' ? (
                <Typography color="secondary" variant="caption">
                  {errors.password}
                </Typography>
              ) : null}
            </Typography>
            <Button type="submit" variant="contained" color="secondary">
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item sm={4}></Grid>
    </Grid>
  );
};

export default connect(null, actions)(Login);
