import { createAction } from "@reduxjs/toolkit";

export const removeContact = createAction("contacts/removeContact");

// import { ADD_CONTACT, REMOVE_CONTACT } from "../action-types";
// import { createAction } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

// export const addContact = createAction(ADD_CONTACT, (name, number) => ({
//   payload: { name, number, id: nanoid() },
// }));

// export const removeContact = createAction(REMOVE_CONTACT);
