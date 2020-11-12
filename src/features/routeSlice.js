import { createSlice } from '@reduxjs/toolkit';

export const routeSlice = createSlice({
  name: 'route',
  initialState: {
    current: '',
  },
  reducers: {    
    updateCurrentPath: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateCurrentPath } = routeSlice.actions;




export const selectPath = state => state.route.path;

export default routeSlice.reducer;
