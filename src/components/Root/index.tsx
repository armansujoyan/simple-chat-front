import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Box, makeStyles, createStyles, Theme } from '@material-ui/core';
import DashboardPage from '../../views/DashboardPage';
import SignInPage from '../../views/SignInPage';
import SignUpPage from '../../views/SingupPage';
import PrivateRoute from '../PrivateRoute';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh'
    }
  }),
);

const Root: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container} alignItems='center' display='flex'>
            <Switch>
                <Route path='/' exact>
                  <Redirect to='/login'/>
                </Route>
                <Route path='/signup' component={SignUpPage}/>
                <Route path='/login' component={SignInPage}/>
                <PrivateRoute path='/dashboard' component={DashboardPage}/>
            </Switch>
        </Box>
    )
}

export default Root;
