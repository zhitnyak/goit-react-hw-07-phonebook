import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const fetchContacts = () => {
  return axios.get("/contacts").then((response) => response.data);
};
console.log(fetchContacts);

export const addContact = (contact) => {
  return axios.post("/contacts", contact).then(({ data }) => data);
};

export const deleteContact = (contactId) => {
  return axios.delete(`/contacts/${contactId}`);
};
