import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;
