import React from 'react'
import { Switch, Route } from 'react-router'
import { Box, makeStyles, createStyles, Theme } from '@material-ui/core'
import SingInPage from '../../views/SingInPage'

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
                <Route path='/' exact component={SingInPage}/>
                <Route path='/signup'/>
            </Switch>
        </Box>
    )
}

export default Root;
