import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Box, makeStyles, createStyles, Theme, Snackbar } from '@material-ui/core';
import DashboardPage from '../../views/DashboardPage';
import SignInPage from '../../views/SignInPage';
import SignUpPage from '../../views/SingupPage';
import ChatPage from '../../views/ChatPage';
import PrivateRoute from '../PrivateRoute';
import { useSelector } from 'react-redux';
import { snackbarSelector } from '../../redux/selectors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh'
    }
  }),
);

const Root: React.FC = () => {
    const classes = useStyles();
    const showSnackbar = useSelector(snackbarSelector);

    return (
        <Box className={classes.container} alignItems='center' display='flex'>
                <Snackbar
                  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                  open={showSnackbar}
                  message={<span id="message-id">I love snacks</span>}
            />
            <Switch>
                <Route path='/' exact>
                  <Redirect to='/login'/>
                </Route>
                <Route path='/signup' component={SignUpPage}/>
                <Route path='/login' component={SignInPage}/>
                <PrivateRoute path='/dashboard' component={DashboardPage}/>
                <PrivateRoute path='/chat' component={ChatPage}/>
            </Switch>
        </Box>
    )
}

export default Root;
