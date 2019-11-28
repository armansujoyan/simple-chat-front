import React from 'react';
import { isAuthenticated } from '../../utils/auth';
import { Redirect, Route } from 'react-router';

const PrivateRoute: React.FC<any> = ({ children, ...rest}) => {
    return (
        <Route {...rest}>
            { isAuthenticated() ? children : <Redirect to='/login'/> }
        </Route>
    )
}

export default PrivateRoute;