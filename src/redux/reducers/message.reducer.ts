import { GET_CHAT_MESSAGES_SUCCESS, GET_NEW_PRIVATE_MESSAGE } from '../constants';

const initialState: any[] = []

export default (state = initialState, action: any) => {
    const { type, payload } = action;
    switch (type) {
    case GET_CHAT_MESSAGES_SUCCESS:
        return [ ...state, ...payload ]
    case GET_NEW_PRIVATE_MESSAGE:
        return [ ...state, payload ];
    default:
        return state
    }
}
