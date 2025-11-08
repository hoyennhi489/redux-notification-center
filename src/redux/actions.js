export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const CLEAR_ALL = 'CLEAR_ALL';

export const addNotification = (message, level = 'info') => ({
  type: ADD_NOTIFICATION,
  payload: { id: Date.now(), message, level },
});

export const removeNotification = (id) => ({
  type: REMOVE_NOTIFICATION,
  payload: id,
});

export const clearAll = () => ({
  type: CLEAR_ALL,
});