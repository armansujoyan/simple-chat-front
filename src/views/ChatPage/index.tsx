import React, { useState, ChangeEvent, useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import { GetChatMessages } from '../../redux/actions/message.actions';

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

const ChatPage: React.FC<any> = () => {
    const classes = useStyles();
    const query = useQuery();
    const [message, setMessage] = useState<string>('');
    const dispatch = useDispatch();

    const owner = query.get('owner');
    const reciever = query.get('reciever');

    useEffect(() => {
        dispatch(GetChatMessages({ owner, reciever }));
    }, []);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setMessage(event.target.value);

    return (
        <Box className={classes.wrapper} component='div' display='flex' flexDirection='column'>
            <Box flexGrow={1}
                className={classes.topBar}
                justifyContent='center'
                alignItems='center'
                display='flex'>
                <Typography className={classes.topBarText} align='center'>
                    A chat component
                </Typography>
            </Box>
            <Box flexGrow={14}>
                <List className={classes.list}>
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
                    value={message}
                    fullWidth/>
            </Box>
        </Box>
    )
};

export default ChatPage;
