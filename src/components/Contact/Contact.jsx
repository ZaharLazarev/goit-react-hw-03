import {react} from 'react'
import css from './Contact.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import clsx from 'clsx'
import { IoPerson } from "react-icons/io5";
export default function Contact({VisibleContacts, onDelete}){
  return(
    <div className={clsx(css.ContactListWraper)}>
        {VisibleContacts.map((contact)=>{
      return (
      <li className={clsx(css.ContactListElement)} key={contact.id}>
        <div className={clsx(css.ContactNameAndNumber)}>
          <div className={clsx(css.ContactTextContainer)}>
           <IoPerson />
           <p className={clsx(css.ContactListName)}>{contact.name}</p>
          </div>
          <div className={clsx(css.ContactTextContainer)}>
           <FaPhoneAlt />
           <p className={clsx(css.ContactListNumber)}>{contact.number}</p>
          </div>
        </div>
           <button className={clsx(css.ContactListButton)} onClick={()=> onDelete(contact.id)}>delete</button>
      </li>
      )
        })}
    </div>
  )
}
