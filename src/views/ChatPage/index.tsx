import React from 'react';
import {
    makeStyles,
    createStyles,
    Typography,
    ListItem,
    Theme,
    List,
    Box
} from '@material-ui/core'
import { useQuery } from '../../hooks';

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
            </Box>
        </Box>
    )
};

export default ChatPage;
