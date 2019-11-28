import React, { useState } from 'react';
import {
    Box,
    Container,
    TextField,
    Button,
    FormGroup,
    Typography,
    makeStyles,
    createStyles,
    Theme
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      marginTop: '2rem'
    }
  }),
);

const SingInPage: React.FC = () => {
    const classes = useStyles();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleUsernameChange = (event: any) => setUsername(event.target.value);
    const handlePasswordChange = (event: any) => setPassword(event.target.value);

    const handleSubmit = (event: any) => {
        event.preventDefault();
    }

    return (
        <Container maxWidth='md'>
            <Box component='div' alignItems='cneter'>
                <form onClick={handleSubmit}>
                    <FormGroup>
                            <TextField
                                id='username'
                                margin='normal'
                                label='Username'
                                onChange={handleUsernameChange}
                                value={username}
                                fullWidth
                                />
                            <TextField
                                id='password'
                                margin='normal'
                                type='password'
                                label='Password'
                                onChange={handlePasswordChange}
                                value={password}
                                fullWidth
                            />
                            <Button color='primary'>
                                Login
                            </Button>
                    </FormGroup>
                </form>
                <Typography align='center' className={classes.text}>
                    Don't have an account yet? <Link to='/signup'>Sign Up</Link>
                </Typography>
            </Box>
        </Container>
    )
}

export default SingInPage;