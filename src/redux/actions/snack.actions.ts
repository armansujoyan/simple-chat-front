import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '../constants';

export const ShowSnackbar = () => ({
    type: SHOW_SNACKBAR
})

export const HideSnackbar = () => ({
    type: HIDE_SNACKBAR
})
