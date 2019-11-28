import { GET_ACTIVE_USERS_SUCCESS } from '../constants';

const initialState: any[] = []

export default (state = initialState, action: any) => {
    const { type, payload } = action;
    switch (type) {
    case GET_ACTIVE_USERS_SUCCESS:
        return [ ...state, ...payload ]
    default:
        return state
    }
}
