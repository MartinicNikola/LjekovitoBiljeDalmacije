import React from 'react'
import './Receipts.css'

function Receipts(props) {
  return (
    props.data === undefined ? <div /> :
    <div className={`receiptsContainer ${props.hide ? 'hide': ''}`}>
        {props.data.map(e=>
        <div className='receipt'>
          <div className='receiptHeader'>
            <h4 className='receipt_h4'><b>{e.ime}</b></h4>
            <img src={e.image} className='receipt_img' />
          </div>
          <p>{e.opis}</p>
        </div>)}
    </div>
  )
}

export default Receipts
