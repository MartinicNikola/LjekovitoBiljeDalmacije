import React from 'react'
import {useState,useEffect} from 'react'
import styles from './Header.css'
import Menu_item from './Menu_item'
import TextField from '@mui/material/TextField';
import {AiOutlineArrowDown} from 'react-icons/ai';
import {IconContext} from 'react-icons';

function Menu(props) {

  const [hide, setHide] = useState(false);
  const [filteredList, setFilteredList] = useState(props.data);

  const clickArrow = () => {   
    setHide(current => !current);
    console.log(props.data)
  };
  
  return (
    <div className="container">
      <IconContext.Provider value={{size:'30px', padding:'0px', justifyContent:'flex-start', }}>
        <div>
          <AiOutlineArrowDown onClick={clickArrow}/>
        </div>
      </IconContext.Provider>
      
      <div className={`menu + ${hide ? 'hide' : ''}`}>
      <div className='Menu-items'>
        {props.data.map(dataItem => <Menu_item key={dataItem.id} id={dataItem.id} name={dataItem.ime} image={dataItem.image} clicked={props.clicked}/>)}
      </div>
    </div>
    </div>
    
  )
}

export default Menu
