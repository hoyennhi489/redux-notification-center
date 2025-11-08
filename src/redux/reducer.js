import { ADD_NOTIFICATION, REMOVE_NOTIFICATION, CLEAR_ALL } from './actions';

const initialState = {
  notifications: [],
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return { ...state, notifications: [...state.notifications, action.payload] };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter((n) => n.id !== action.payload),
      };
    case CLEAR_ALL:
      return { ...state, notifications: [] };
    default:
      return state;
  }
};