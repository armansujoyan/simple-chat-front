import { combineReducers } from "redux";
import user from './user.reducer'
import activeUsers from './actives.reducer';
import messages from './message.reducer';

export default combineReducers({
    user,
    messages,
    activeUsers
});