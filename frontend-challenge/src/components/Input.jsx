import React from 'react';
import axios from 'axios'

export default function Input() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted')
  }
    return(
    <form className="Input" onSubmit={handleSubmit}>
    <label>
      Input:
      <input type="text" input="input"/>
    </label>
    <input type="submit" value="Submit"/>
    </form>
  )
}