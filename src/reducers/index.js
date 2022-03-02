import { combineReducers } from 'redux';
import contacts from './contactReducer';
import count from './counterReducer'

export default combineReducers({
    contacts: contacts,
    count: count
});