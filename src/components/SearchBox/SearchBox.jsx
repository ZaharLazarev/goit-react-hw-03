import clsx from 'clsx'
import css from './SearchBox.module.css'
import {react} from 'react'
export default function SearchBox({value, onFilter}){
  return(
    <div className={clsx(css.SearchBoxContainer)}>
       <label className={clsx(css.SearchBoxLabel)} htmlFor='username'>Find contacts by name</label>
       <input className={clsx(css.SearchBoxInput)} type="text" value={value} onChange={(e)=>onFilter(e.target.value)} id='username'/>
    </div>
  )
}