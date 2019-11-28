import jwt from 'jsonwebtoken';
import { PUBLIC_KEY } from '../config'

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