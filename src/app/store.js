import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import routeReducer from '../features/routeSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    route : routeReducer,
  },
});
