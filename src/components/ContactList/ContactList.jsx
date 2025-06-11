import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const getVisibleContacts = (contacts, searchValue) => {
  if (searchValue === "") return contacts;

  return contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchValue.toLowerCase());
  });
};

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const searchQuery = useSelector((state) => state.filters.name);

  const visibleContacts = getVisibleContacts(contacts, searchQuery);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {visibleContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact value={contact} onDelete={handleDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
