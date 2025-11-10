import { ADD_NOTIFICATION, REMOVE_NOTIFICATION, CLEAR_ALL } from './actions';

const initialState = [];
const MAX_NOTIFICATIONS = 5;

export const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION: {
      const updated = [...state, action.payload];

      if (updated.length > MAX_NOTIFICATIONS) {
        updated.shift(); 
      }

      return updated;
    }

    case REMOVE_NOTIFICATION:
      return state.filter((n) => n.id !== action.payload);

    case CLEAR_ALL:
      return [];

    default:
      return state;
  }
};