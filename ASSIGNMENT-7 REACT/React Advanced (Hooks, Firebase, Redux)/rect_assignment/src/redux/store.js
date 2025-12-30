import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import crudReducer from "./crud/crudSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    crud: crudReducer,
  },
});

export default store;
