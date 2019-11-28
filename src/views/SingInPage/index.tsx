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

import SingInForm from './SignInForm';

const signInValidationSchema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
})

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      marginTop: '2rem'
    }
  }),
);

const SingInPage: React.FC = () => {
    const classes = useStyles();

    const initialValues = {
        username: '',
        password: ''
    }

    return (
        <Container maxWidth='md'>
            <Box component='div' alignItems='cneter'>
                <Formik
                    component={SingInForm}
                    initialValues={initialValues}
                    validationSchema={signInValidationSchema}
                    onSubmit={() => console.log('Submitting')}/>
                <Typography align='center' className={classes.text}>
                    Don't have an account yet? <Link to='/signup'>Sign Up</Link>
                </Typography>
            </Box>
        </Container>
    )
}

export default SingInPage;