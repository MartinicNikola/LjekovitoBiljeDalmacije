import React from 'react'
import './MainContainer.css'

function MainContainer(props) {

  return (
      props.data.recepti === undefined ? <div /> : 
      <div className={`mainContainer ${props.hide ? 'hide' : ''}`}>
        <div className='content'>
         <img className='mainImage' src={props.data.mainImage} /> 
          <button className='x' onClick={props.clicked}><strong>X</strong></button>
          <h2 className="heading">{props.data.ime}</h2>
          <div className='description' >
            <h4 className="floatLeft">Opis:</h4>
            <p>{props.data.opis}</p>
            <br />
            <h4 className="floatLeft">Uzgoj:</h4>
            <p>{props.data.cvatnja_berba}</p>
          </div> 
          <h4 className="floatLeft">Koristi se za:</h4>
          <div className='usedFor'>
            <ul>
              {props.data.lijekZa.map(e=><li key={e}>{e}</li>)}
            </ul>
          </div>
        </div>
      </div>
  )
}

export default MainContainer
