import {
    USER_LOGIN_REQUEST,
    USER_SIGN_UP_REQUEST,
    USER_SIGN_OUT,
    GET_ACTIVE_USERS_REQUEST,
    USER_DISONNECTED,
    NEW_USER_JOIN
} from '../constants'
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

export const GetActiveUsers = () => ({
    type: GET_ACTIVE_USERS_REQUEST
})

export const UserJoinAction = (payload: any) => ({
    type: NEW_USER_JOIN,
    payload
})

export const UserDisconnectedAction = (payload: string) => ({
    type: USER_DISONNECTED,
    payload
})



