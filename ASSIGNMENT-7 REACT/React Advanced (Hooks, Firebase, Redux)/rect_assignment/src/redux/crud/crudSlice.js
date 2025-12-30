import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // CRUD items store
};

export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: Date.now(), // unique id
        text: action.payload,
      };
      state.items.push(newItem);
    },
    updateItem: (state, action) => {
      const { id, text } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items[index].text = text;
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearAll: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, updateItem, deleteItem, clearAll } = crudSlice.actions;
export default crudSlice.reducer;
