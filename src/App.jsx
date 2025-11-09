import React from 'react';
import { useDispatch } from 'react-redux';
import { addNotification, clearAll } from './redux/actions';
import NotificationList from './components/NotificationList';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  const showInfo = () => {
    dispatch(addNotification('This is an info message', 'info'));
  };

  const showError = () => {
    dispatch(addNotification('This is an error message', 'error'));
  };

  return (
    <div className="app-container">
      <h1>Global Notification Center</h1>
      <div className="button-group">
        <button onClick={showInfo}>Show Info</button>
        <button onClick={showError}>Show Error</button>
        <button onClick={() => dispatch(clearAll())}>Clear All</button>
      </div>

      <NotificationList />
    </div>
  );
};

export default App;