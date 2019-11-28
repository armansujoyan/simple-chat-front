import React from 'react';
import { useSelector } from 'react-redux';
import {
    Box,
    List,
    createStyles,
    makeStyles,
    Typography,
    Theme
} from '@material-ui/core'
import { userSelector } from '../../redux/selectors';

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
    }
  }),
);

const DashboardPage: React.FC<any> = () => {
    const classes = useStyles();

    const user: any = useSelector(userSelector);

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
        </Box>
    )
}

export default DashboardPage;