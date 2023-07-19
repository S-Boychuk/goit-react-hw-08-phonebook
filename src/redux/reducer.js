import { combineReducers } from 'redux';
import { authReducer } from './Auth/authSlice';
import { contactsReducer } from './Contacts/contactsSlice';
import { filterReducer } from './Contacts/filterSlice';

export const reducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});
