import ContactForm from "../ContactForm/ContactForm"
import { useState, useEffect } from 'react';
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"


export default function App() {

  const initialValues =
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialValues;
  })
  const [filter, setFilter] = useState("")
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))


  const addContacts = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }
  const deleteContact = (contactId) => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId)
    })
  }

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>

  );
}