import { USER_LOGIN_REQUEST, USER_SIGN_UP_REQUEST, USER_SIGN_OUT } from '../constants'
import { AuthData, SignUpData } from '../../interfaces'

export const SignInAction = (payload: AuthData) => ({
    type: USER_LOGIN_REQUEST,
    payload
})

export const SignUpAction = (payload: SignUpData) => ({
    type: USER_SIGN_UP_REQUEST,
    payload
})

export const SignOutAction = () => ({
    type: USER_SIGN_OUT
})
