import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Box,
    List,
    createStyles,
    makeStyles,
    Typography,
    Theme,
    Button
} from '@material-ui/core'
import { userSelector } from '../../redux/selectors';
import { SignOutAction } from '../../redux/actions';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: '100%',
      height: '100%'
    },
    topBar: {
        backgroundColor: theme.palette.primary.main
    },
    topBarText: {
        color: 'white'
    },
    signOut: {
        height: '100%'
    }
  }),
);

const DashboardPage: React.FC<any> = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const user: any = useSelector(userSelector);

    const signOut = (event: any) => {
        dispatch(SignOutAction());
        localStorage.removeItem('token');
        history.push('/login');
    }

    return (
        <Box className={classes.wrapper} component='div' display='flex' flexDirection='column'>
            <Box flexGrow={1}
                className={classes.topBar}
                justifyContent='center'
                alignItems='center'
                display='flex'>
                <Typography className={classes.topBarText} align='center'>
                    {`Hi dear ${user.username}. Below you can see the list of available users`}
                </Typography>
            </Box>
            <Box flexGrow={14}>
                <List></List>
            </Box>
            <Box flexGrow={1}
                alignItems='center'
                display='flex'>
                <Button fullWidth
                    className={classes.signOut}
                    color='primary'
                    onClick={signOut}>
                    Sign Out
                </Button>
            </Box>
        </Box>
    )
}

export default DashboardPage;