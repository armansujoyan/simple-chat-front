import jwt from 'jsonwebtoken';
import { PUBLIC_KEY } from '../config'
import { GET_USER_REQUEST } from '../redux/constants';

export const isAuthenticated: () => boolean = () => {
    const token = localStorage.getItem('token');
    if(token) {
        try {
            jwt.verify(token, PUBLIC_KEY);
            return true;
        } catch(error) {
            return false;
        }
    } else {
        return false;
    }
}

export const initialAuth = async (dispatch: any) => {
    const token = localStorage.getItem('token');
    if(token) {
        try {
            const payload: any = jwt.verify(token, PUBLIC_KEY);
            dispatch({ type: GET_USER_REQUEST, payload: {
                token,
                uid: payload.sub
            } })
        } catch(error) {
            localStorage.removeItem('token');
        }
    }
}