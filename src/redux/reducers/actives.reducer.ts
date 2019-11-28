import { GET_ACTIVE_USERS_SUCCESS, NEW_USER_JOIN, USER_DISONNECTED } from '../constants';

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
    default:
        return state
    }
}
