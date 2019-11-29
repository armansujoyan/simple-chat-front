import React, { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IO from 'socket.io-client';
import {
    makeStyles,
    createStyles,
    Typography,
    TextField,
    ListItem,
    Theme,
    List,
    Box
} from '@material-ui/core'

import { useQuery } from '../../hooks';
import { SocketUrl } from '../../config';
import { messagesSelector, userSelector } from '../../redux/selectors';
import { GetChatMessages, GetNewPrivateMessage } from '../../redux/actions/message.actions';

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
    list: {
        padding: 0,
        maxHeight: '50rem',
        overflow: 'auto'
    },
    listItem: {
        height: '5rem',
        width: '100%',
        margin: 0
    },
    emptyListText: {
        width: '100%'
    }
  }),
);

let socket: any;

const ChatPage: React.FC<any> = () => {
    const classes = useStyles();
    const query = useQuery();
    const [message, setMessage] = useState<string>('');
    const dispatch = useDispatch();
    const messages: any[] = useSelector(messagesSelector);
    const user: any = useSelector(userSelector);

    const owner = query.get('owner');
    const reciever = query.get('reciever');
    const chatName = query.get('chatName');

    useEffect(() => {
        dispatch(GetChatMessages({ owner, reciever }));
        socket = IO.connect(SocketUrl, { query: { token: localStorage.getItem('token') }});

        socket.emit('NEW_USER_CONNECTION', user._id);

        socket.on('NEW_PRIVATE_MESSAGE', (message: any) => {
            dispatch(GetNewPrivateMessage(message));
        })
    }, []);

    const sendMessage = (message: string) => {
        socket.emit('SEND_PRIVATE_MESSAGE', {
            owner,
            reciever,
            message
        });
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)

    const handleKeyDown = (event: any) => {
        if(event.key === 'Enter') {
            sendMessage(message);
            setMessage('');
        }
    }

    return (
        <Box className={classes.wrapper} component='div' display='flex' flexDirection='column'>
            <Box flexGrow={1}
                className={classes.topBar}
                justifyContent='center'
                alignItems='center'
                display='flex'>
                <Typography className={classes.topBarText} align='center'>
                    { chatName }
                </Typography>
            </Box>
            <Box flexGrow={14}>
                <List className={classes.list}>
                    {
                        messages.length === 0 ?
                        <ListItem>
                            <Box display='flex' justifyContent='center' className={classes.listItem}>
                                No messages to show
                            </Box>
                        </ListItem>
                        :
                        messages.map((item: any) => <ListItem key={item._id}>
                            <Box component='div'
                                className={classes.emptyListText}
                                display='flex'
                                justifyContent={
                                item.owner === user._id ? 'flex-end' : 'flex-start'
                            }>
                                <p>
                                    { item.message }
                                </p>
                            </Box>
                        </ListItem>)
                    }
                </List>
            </Box>
            <Box flexGrow={1}
                alignItems='center'
                display='flex'>
                <TextField
                    id='message'
                    name='message'
                    margin='normal'
                    label='Enter message'
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    value={message}
                    fullWidth/>
            </Box>
        </Box>
    )
};

export default ChatPage;
