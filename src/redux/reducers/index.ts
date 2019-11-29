import { combineReducers } from "redux";
import user from './user.reducer'
import activeUsers from './actives.reducer';
import messages from './message.reducer';
import ui from './ui.reducer'

export default combineReducers({
    ui,
    user,
    messages,
    activeUsers
});