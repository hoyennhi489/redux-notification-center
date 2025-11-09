import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeNotification } from '../redux/actions';
import './NotificationList.css';

const NotificationList = () => {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    const timers = notifications.map((n) =>
      setTimeout(() => dispatch(removeNotification(n.id)), 3000)
    );

    return () => timers.forEach(clearTimeout);
  }, [notifications, dispatch]);

  return (
    <div className="notification-container" aria-live="polite">
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
  );
};

export default NotificationList;