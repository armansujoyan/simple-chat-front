import { GET_ACTIVE_USERS_SUCCESS, NEW_USER_JOIN, USER_DISONNECTED, USER_SIGN_OUT } from '../constants';

const initialState: any[] = []

export default (state = initialState, action: any) => {
    const { type, payload } = action;
    switch (type) {
    case GET_ACTIVE_USERS_SUCCESS:
        return [ ...state, ...payload ]
    case NEW_USER_JOIN:
        return [ ...state, payload ];
    case USER_DISONNECTED:
        return state.filter(user => user._id !== payload);
    case USER_SIGN_OUT:
        return []
    default:
        return state
    }
}
