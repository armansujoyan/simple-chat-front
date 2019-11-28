import {
    USER_LOGIN_SUCCESS,
    USER_SIGN_UP_SUCCESS,
    USER_LOGIN_ERROR,
    USER_SIGN_UP_ERROR,
    USER_SIGN_OUT
} from '../constants';

const userLocal = localStorage.getItem('user');
const initialState = userLocal ? JSON.parse(userLocal).user : {};

export default (state = initialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case USER_LOGIN_SUCCESS:
        case USER_SIGN_UP_SUCCESS:
            return { ...payload.user }
        case USER_LOGIN_ERROR:
        case USER_SIGN_UP_ERROR:
            return { error: payload }
        case USER_SIGN_OUT:
            return { }
        default:
            return state
    }
}
