import { GET_CHAT_MESSAGES_REQUEST, GET_NEW_PRIVATE_MESSAGE, CLEAR_MESSAGES } from '../constants';

export const GetChatMessages = (payload: any) => ({
    type: GET_CHAT_MESSAGES_REQUEST,
    payload
})

export const GetNewPrivateMessage = (payload: any) => ({
    type: GET_NEW_PRIVATE_MESSAGE,
    payload
})

export const ClearMessages = () => ({
    type: CLEAR_MESSAGES
})
