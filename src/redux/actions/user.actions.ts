import { USER_LOGIN_REQUEST } from '../constants'
import { AuthData } from '../../interfaces'

export const SignInAction = (payload: AuthData) => ({
    type: USER_LOGIN_REQUEST,
    payload
})
