import { useEffect, useState } from 'react'
import css from'./App.module.css'
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import clsx from 'clsx';
const ContactsArray=
  [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ] 

function App() {
  const [filter, setfilter]=useState("");
  const [ListOfContacts, setContacts]=useState(()=>JSON.parse(localStorage.getItem('contacts'))??ContactsArray);
  useEffect(()=>{
     localStorage.setItem('contacts', JSON.stringify(ListOfContacts))
  },[ListOfContacts])
  const VisibleContacts=ListOfContacts.filter((contact)=>contact.name.toLowerCase().includes(filter.toLowerCase()));
  const addContacts = (newContact)=>{
    setContacts((previousContacts)=>{
      return[...previousContacts, newContact]
    });

  };
  const deleteContacts = (ContactId)=>{
    setContacts((previousContacts)=>{
      return previousContacts.filter((contact)=>contact.id!=ContactId)
    })
  }


return(
  <div className={clsx(css.Wrapper)}>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addContacts} />
  <SearchBox value={filter} onFilter={setfilter} />
  <ContactList VisibleContacts={VisibleContacts} onDelete={deleteContacts}  />
</div>

)
}

export default App