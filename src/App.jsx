import React from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <h1>To-Do List with Redux</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;

