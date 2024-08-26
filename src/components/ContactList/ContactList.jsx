import {react} from 'react'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import clsx from 'clsx'
export default function ContactList({VisibleContacts, onDelete}){
  return(
    <div>
      <ul className={clsx(css.ContactList)}>
         <Contact VisibleContacts={VisibleContacts} onDelete={onDelete}/>
      </ul>
    </div>
  )
}