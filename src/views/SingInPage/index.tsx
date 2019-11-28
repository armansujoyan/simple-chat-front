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
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';

import SingInForm from './SignInForm';
import { userSelector } from '../../redux/selectors';
import { SignInAction } from '../../redux/actions';

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
    const dispatch = useDispatch();

    const initialValues = {
        username: '',
        password: ''
    }

    const handleSubmit = (data: any) => {
        dispatch(SignInAction(data));
    }

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
                    Don't have an account yet? <Link to='/signup'>Sign Up</Link>
                </Typography>
            </Box>
        </Container>
    )
}

export default SingInPage;