import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IO from 'socket.io-client';
import {
    Box,
    List,
    createStyles,
    makeStyles,
    Typography,
    ListItem,
    Theme,
    Button
} from '@material-ui/core'
import { SocketUrl } from '../../config';
import { userSelector, activeUsersSelector } from '../../redux/selectors';
import { SignOutAction, GetActiveUsers, UserJoinAction, UserDisconnectedAction } from '../../redux/actions';
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
    },
    list: {
        padding: 0,
        overflowY: 'auto'
    },
    listItem: {
        height: '5rem',
    },
    emptyListText: {
        width: '100%'
    }
  }),
);

let socket: any;

const DashboardPage: React.FC<any> = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const activeUsers: any[] = useSelector(activeUsersSelector);

    const user: any = useSelector(userSelector);

    const signOut = (event: any) => {
        dispatch(SignOutAction());
        socket.emit('DISCONNECT_USER', user._id);
        localStorage.removeItem('token');
        history.push('/login');
    }

    useEffect(() => {
        dispatch(GetActiveUsers());
    }, [dispatch])

    useEffect(() => {
        socket = IO.connect(SocketUrl, { query: { token: localStorage.getItem('token') }});

        socket.emit('NEW_USER_CONNECTION', user._id);

        socket.on('NEW_USER_JOINED', (user: any) => {
            dispatch(UserJoinAction(user));
        });

        socket.on('USER_DISCONNECTED', (userId: string) => {
            dispatch(UserDisconnectedAction(userId));
        })
        return () => {
            socket.off();
        }
    }, [])

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
                <List className={classes.list}>
                    {
                        activeUsers.length === 0 ?
                            <ListItem className={classes.listItem}>
                                <Typography align='center' className={classes.emptyListText}>
                                    There are no active usrs yet.
                                </Typography>
                            </ListItem> :
                            activeUsers.map((user: any) => <ListItem
                                className={classes.listItem}
                                key={user._id}
                                button>
                                    {user.username}
                            </ListItem>)
                    }
                </List>
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