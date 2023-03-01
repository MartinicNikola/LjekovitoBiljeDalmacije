import React from 'react'
import styles from './Menu.css'


function Menu_item(props) {
  return (
    <div className={`menu-item`} key={props.id}  onClick={()=>props.clicked(props.id)}>
      <img src={props.image} />
      <h5>{props.name}</h5>
    </div>
  )
}

export default Menu_item
