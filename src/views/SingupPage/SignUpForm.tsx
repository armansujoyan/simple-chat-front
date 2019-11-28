import React from 'react';
import { FormGroup, TextField, Button } from '@material-ui/core'
import { FormikProps } from 'formik';

interface SubmitFormValues {
    username: string,
    email: string,
    password: string
}

const SignUpForm: React.FC<FormikProps<SubmitFormValues>> = (props: FormikProps<SubmitFormValues>) => {
    const {
        values: { username, email, password },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched
    } = props;

    const change = (name: any, event: any) => {
        event.persist();
        handleChange(event);
        setFieldTouched(name, true, false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <TextField
                    id='username'
                    name='username'
                    margin='normal'
                    value={username}
                    helperText={touched.username ? errors.username : ''}
                    error={touched.username && Boolean(errors.username)}
                    onChange={change.bind(null, 'username')}
                    label='Username'
                    fullWidth
                    />
                <TextField
                    id='email'
                    name='email'
                    value={email}
                    helperText={touched.email ? errors.email : ''}
                    error={touched.email && Boolean(errors.email)}
                    onChange={change.bind(null, 'email')}
                    margin='normal'
                    label='Email'
                    fullWidth
                />
                <TextField
                    id='password'
                    name='password'
                    value={password}
                    helperText={touched.password ? errors.password : ''}
                    error={touched.password && Boolean(errors.password)}
                    onChange={change.bind(null, 'password')}
                    margin='normal'
                    type='password'
                    label='Password'
                    fullWidth
                />
                <Button
                    color='primary'
                    type='submit'
                    disabled={!isValid}>
                    Sign Up
                </Button>
            </FormGroup>
        </form>
    )
}

export default SignUpForm;