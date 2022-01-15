import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact } from "./contacts-actions";

export const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => {
    let unicName = state.find((contact) => contact.name === payload.name);
    if (unicName) {
      alert("This contact is already exists");
      return state;
    } else {
      return [...state, payload];
    }
  },
  [removeContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
