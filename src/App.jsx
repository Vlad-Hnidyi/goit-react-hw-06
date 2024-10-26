import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useState, useEffect } from "react";

import "./App.css";

const contactList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContact] = useState(() => {
    const parsedItems =
      JSON.parse(localStorage.getItem("contacts")) ?? contactList;
    return parsedItems;
  });

  useEffect(() => {
    const stringifiedItems = JSON.stringify(contacts);
    localStorage.setItem("contacts", stringifiedItems);
  }, [contacts]);

  const [filter, setFilter] = useState(" ");
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
  const onAddContact = (finalUser) => {
    setContact((prevState) => [...prevState, finalUser]);
  };
  const deleteContact = (contactId) => {
    setContact((prevState) => {
      return prevState.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList contactsList={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
