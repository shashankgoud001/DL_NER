import React from 'react'
import Styles from './Card.module.css'

const Card = (props)=> {
    
  return (
    <div id={Styles.Card}>
      <img src={props.image}></img>
      <h3>{props.title}</h3>
      <p id={Styles.CardText} >{props.text}</p>
      <a href={props.location}>
      <button>{props.button}</button>
      </a>
    </div>
  )
}

export default Card
