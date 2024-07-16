// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.description = description;
      }
    }
  }
});

export const { addTask, toggleTask, editTask } = tasksSlice.actions;

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer
  }
});

export default store;
