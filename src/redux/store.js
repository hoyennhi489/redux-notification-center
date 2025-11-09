import { createStore, combineReducers } from 'redux';
import { notificationsReducer } from './reducer';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
});

export const store = createStore(rootReducer);