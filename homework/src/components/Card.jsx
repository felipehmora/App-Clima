import React from 'react';
import styles from './Card.module.css'

export default function Card(props) {
  // acá va tu código
  return (
    <div className={styles.card}>
      <div className={styles.header}>
      <span>{props.name}</span>
      <button onClick={props.onClose}>X</button>
  
      </div>
      <div className={styles.content}>
        <img src= {`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="weather-icon" />
        <div>
          <h3>Max:</h3>
          <h3>{props.max}</h3>
  
        </div>
        <div>
          <h3>
            Min:
          </h3>
        </div>

        <div>
          <h3>
            {props.min} {" "}
          </h3>

        </div>
      </div>
  
    </div>
    
    ); 
    
};