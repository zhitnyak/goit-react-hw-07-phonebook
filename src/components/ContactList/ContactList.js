import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/contacts-actions";
import css from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector((state) => state.items);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  function getVisibleContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const visibleContacts = getVisibleContacts();
  return (
    <ul className={css.list}>
      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            {`${name}: ${number}`}
            <button
              className={css.btn}
              type="button"
              onClick={() => dispatch(removeContact(id))}
            >
              delete
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ContactList;
