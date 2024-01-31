import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  theme: "light",
};

const counterSlice = createSlice({
  name: "portfolio", // Name of the slice
  initialState,
  reducers: {
    //data send by actions is come in action.payload
    changeTheme:(state)=>{
      state.theme= state.theme === "light" ? "dark":"light" ; 
    },
    
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const { changeTheme} = counterSlice.actions
export default store;

