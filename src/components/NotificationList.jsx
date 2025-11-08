import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeNotification, addNotification } from '../redux/actions';
import './NotificationList.css';

const NotificationList = () => {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const showInfo = () => {
    dispatch(addNotification('This is an info message', 'info'));
  };

  const showError = () => {
    dispatch(addNotification('This is an error message', 'error'));
  };

  return (
    <div>
      <div className="button-group">
        <button onClick={showInfo}>Show Info</button>
        <button onClick={showError}>Show Error</button>
      </div>

      <div className="notification-container">
        {notifications.map((n) => (
          <div key={n.id} className={`notification ${n.level}`}>
            <span>{n.message}</span>
            <button
              className="close-btn"
              onClick={() => dispatch(removeNotification(n.id))}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationList;