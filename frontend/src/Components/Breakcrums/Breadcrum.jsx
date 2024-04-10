import React from 'react'
import './Breadcrum.css'
import arrow_icon from "../Assets/breadcrum_arrow.png"





export default function Breadcrum(props) {
    let { product } = props;
  return (
      <div className='breadcrum'>
          HOME <img src={arrow_icon} alt="arrow_icon" />
          SHOP <img src={arrow_icon} alt="arrow_icon" />
          {product.category} <img src={arrow_icon} alt="arrow_icon" />
          {product.name}
      </div>
  )
}
