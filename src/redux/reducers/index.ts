import { combineReducers } from "redux";
import user from './user.reducer'
import activeUsers from './actives.reducer';

export default combineReducers({
    user,
    activeUsers
});