import React, { useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    makeStyles,
    createStyles,
    Button,
    Theme
} from '@material-ui/core';
import * as yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import SingInForm from './SignInForm';
import { SignInAction } from '../../redux/actions';
import { isAuthenticated } from '../../utils/auth';

const signInValidationSchema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
})

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      marginTop: '2rem'
    },
    link: {
        marginLeft: '0.5rem'
    }
  }),
);

const SingInPage: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const initialValues = {
        username: '',
        password: ''
    };

    const handleSubmit = (data: any) => {
        dispatch(SignInAction(data));
    };

    useEffect(() => {
        if(isAuthenticated()) {
            history.push('/dashboard');
        };
    }, [history]);

    return (
        <Container maxWidth='md'>
            <Box component='div' alignItems='cneter'>
                <Typography align='center' component='div'>
                    <Box fontSize='h4.fontSize'>
                        Sign In
                    </Box>
                </Typography>
                <Formik
                    component={SingInForm}
                    initialValues={initialValues}
                    validationSchema={signInValidationSchema}
                    onSubmit={handleSubmit}/>
                <Typography align='center' className={classes.text}>
                    Don't have an account yet?
                    <Button to='/signup' component={Link} color='primary' className={classes.link}>
                        Sign Up
                    </Button>
                </Typography>
            </Box>
        </Container>
    )
}

export default SingInPage;