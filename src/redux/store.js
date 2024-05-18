import { configureStore } from "@reduxjs/toolkit";
// Import your slice reducers here
// import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    // Add your slice reducers here
    // counter: counterReducer,
  },
});

export default store;
