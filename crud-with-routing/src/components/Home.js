// Home.js

import React, { Component } from 'react';

function Home(props) {

  let { options, placeHolderText, styleObj, key, value, name } = props;

  return(
    <select className="form-control" name={name} style={( styleObj ) ? {width: styleObj.width}: {}}>
      <option value="">{(placeHolderText) ? placeHolderText: 'Select'}</option>
      {
        ( options && options.length > 0 )
        ?
        options.map(option => <option key={option.key} value={option[key]}>{option[value]}</option>)
        :
        null
      }
    </select>    
  )
}

export default Home;