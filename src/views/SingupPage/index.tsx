import React from 'react';
import {
    Box,
    Container,
    Typography,
    makeStyles,
    createStyles,
    Theme
} from '@material-ui/core';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

import SignUpForm from './SignUpForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      marginTop: '2rem'
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

    const initialValues = {
        username: '',
        email: '',
        password: ''
    }

    return (
        <Container maxWidth='md'>
            <Box component='div' alignItems='cneter'>
                <Formik
                    component={SignUpForm}
                    initialValues={initialValues}
                    validationSchema={signupValidationSchema}
                    onSubmit={() => console.log('Submitting')}/>
                <Typography align='center' className={classes.text}>
                    Already have an account? <Link to='/'>Sign In</Link>
                </Typography>
            </Box>
        </Container>
    )
}

export default SingInPage;