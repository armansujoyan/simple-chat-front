import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '../constants'

const initialState = {
    showErrorSnack: false
}

export default (state = initialState, action: any) => {
    const { type, payload } = action;
    switch (type) {
    case SHOW_SNACKBAR:
        return { ...state, showErrorSnack: true }
    case HIDE_SNACKBAR:
        return {...state, showErrorSnack: true }
    default:
        return state
    }
}
