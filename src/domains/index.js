import { combineReducers } from 'redux';
import categories from './categories/reducers';
import contacts from './contacts/reducers';
import temp from './temp/reducers';

export default combineReducers({ categories, contacts, temp });
