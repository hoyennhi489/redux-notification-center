import React, { useState } from 'react';


const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  const addInfo = () => {
    setNotifications([...notifications, { id: Date.now(), message: 'This is an info message', level: 'info' }]);
  };

  const addError = () => {
    setNotifications([...notifications, { id: Date.now(), message: 'This is an error message', level: 'error' }]);
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="notification-wrapper">
      <h1>Global Notification Center</h1>
      <div className="button-group">
        <button onClick={addInfo}>Show Info</button>
        <button onClick={addError}>Show Error</button>
        <button onClick={clearAll}>Clear All</button>
      </div>

      <div className="notification-container">
        {notifications.map((n) => (
          <div key={n.id} className={`notification ${n.level}`}>
            <span>{n.message}</span>
            <button className="close-btn" onClick={() => removeNotification(n.id)}>✖</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationList;