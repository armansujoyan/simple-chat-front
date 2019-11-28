import React from 'react';
import { FormGroup, TextField, Button } from '@material-ui/core'
import { FormikProps } from 'formik';

interface SignInFormValues {
    username: string,
    password: string
}

const SignInForm: React.FC<FormikProps<SignInFormValues>> = (props: FormikProps<SignInFormValues>) => {
    const {
        values: { username, password },
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
                    Sign In
                </Button>
            </FormGroup>
        </form>
    )
}

export default SignInForm;