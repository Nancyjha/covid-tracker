import React from 'react';
import '../App.css'
function Card(props) {
  return (
    <div className='card'>{props.children} </div>
  )
};
export default Card;