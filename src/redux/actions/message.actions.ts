import { GET_CHAT_MESSAGES_REQUEST } from '../constants';

export const GetChatMessages = (payload: any) => ({
    type: GET_CHAT_MESSAGES_REQUEST,
    payload
})
