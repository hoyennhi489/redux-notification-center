import { ADD_NOTIFICATION, REMOVE_NOTIFICATION, CLEAR_ALL } from './actions';

const initialState = [];

export const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.payload];
    case REMOVE_NOTIFICATION:
      return state.filter((n) => n.id !== action.payload);
    case CLEAR_ALL:
      return [];
    default:
      return state;
  }
};