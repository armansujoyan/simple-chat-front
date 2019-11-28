import React, { useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    makeStyles,
    createStyles,
    Theme,
    Button
} from '@material-ui/core';
import * as yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import SignUpForm from './SignUpForm';
import { SignUpData } from '../../interfaces';
import { SignUpAction } from '../../redux/actions';
import { isAuthenticated } from '../../utils/auth';

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

const signupValidationSchema = yup.object({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Must be a valid email').required('Email is required'),
    password: yup.string().required('Password is required')
})

const SingInPage: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const initialValues = {
        username: '',
        email: '',
        password: ''
    }

    useEffect(() => {
        if(isAuthenticated()) {
            history.push('/dashboard');
        };
    }, [history]);

    const handleSubmit = (formData: SignUpData) => {
        dispatch(SignUpAction(formData));
    }

    return (
        <Container maxWidth='md'>
            <Box component='div' alignItems='cneter'>
                <Typography align='center' component='div'>
                    <Box fontSize='h4.fontSize'>
                        Sign Up
                    </Box>
                </Typography>
                <Formik
                    component={SignUpForm}
                    initialValues={initialValues}
                    validationSchema={signupValidationSchema}
                    onSubmit={handleSubmit}/>
                <Typography align='center' className={classes.text}>
                    Already have an account?
                    <Button to='/' component={Link} color='primary' className={classes.link}>
                        Sign In
                    </Button>
                </Typography>
            </Box>
        </Container>
    )
}

export default SingInPage;