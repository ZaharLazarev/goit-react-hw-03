import {react} from 'react'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import clsx from 'clsx'
export default function ContactList({VisibleContacts, onDelete}){
  return(
    <ul className={clsx(css.ContactList)}>
      {VisibleContacts.map((contact)=>{
        return(
            <Contact key={contact.id} contact={contact} onDelete={onDelete}/>
        )
      })}
    </ul>
  )
}