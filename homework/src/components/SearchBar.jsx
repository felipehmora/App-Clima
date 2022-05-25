import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <div>
    <input type="text" name="" id=""  placeholder='Agregar ciudad...'/>
    <button onClick={() =>  props.onSearch('Buscando ciudad...')} >Agregar</button>
  </div>
};