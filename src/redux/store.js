import { createStore, combineReducers } from "redux";
import { contactsReducer } from "./contacts/contacts-reducer";
import { filterReducer } from "./filter/filter-reducer";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
