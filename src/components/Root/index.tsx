import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Box, makeStyles, createStyles, Theme, Snackbar } from '@material-ui/core';

import { HideSnackbar } from '../../redux/actions';
import DashboardPage from '../../views/DashboardPage';
import SignInPage from '../../views/SignInPage';
import SignUpPage from '../../views/SingupPage';
import ChatPage from '../../views/ChatPage';
import PrivateRoute from '../PrivateRoute';
import { useSelector, useDispatch } from 'react-redux';
import { snackbarSelector, userSelector } from '../../redux/selectors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh'
    }
  }),
);

const Root: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const showSnackbar = useSelector(snackbarSelector);
    const error = useSelector(userSelector).error;

    const onSnackbarClose = () => dispatch(HideSnackbar());

    return (
        <Box className={classes.container} alignItems='center' display='flex'>
                <Snackbar
                  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                  open={showSnackbar}
                  autoHideDuration={3000}
                  onClose={onSnackbarClose}
                  message={<span id="message-id">{error}</span>}
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
