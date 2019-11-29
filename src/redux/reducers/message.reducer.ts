import { GET_CHAT_MESSAGES_SUCCESS, GET_NEW_PRIVATE_MESSAGE, CLEAR_MESSAGES } from '../constants';

const initialState: any[] = []

export default (state = initialState, action: any) => {
    const { type, payload } = action;
    switch (type) {
    case GET_CHAT_MESSAGES_SUCCESS:
        return [ ...state, ...payload ]
    case GET_NEW_PRIVATE_MESSAGE:
        return [ ...state, payload ];
    case CLEAR_MESSAGES:
        return []
    default:
        return state
    }
}
