import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

export const selectContacts = (state) => state.contacts.items;

export const usersSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addUser: (state, action) => {
      state.items.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const { addUser, deleteUser } = usersSlice.actions;
