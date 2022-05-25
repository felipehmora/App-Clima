import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return <div className={styles.SearchBar}>
    <input className={styles.input} type="text" name="" id=""  placeholder='Agregar ciudad...'/>
    <button className={styles.btn} onClick={() =>  props.onSearch('Buscando ciudad...')} >Agregar</button>
  </div>
};