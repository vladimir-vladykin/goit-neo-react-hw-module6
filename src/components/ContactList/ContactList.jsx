import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {contacts.map((contact) => {
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
