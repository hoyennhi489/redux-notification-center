import { createStore } from 'redux';
import { notificationReducer } from './reducer';

export const store = createStore(notificationReducer);