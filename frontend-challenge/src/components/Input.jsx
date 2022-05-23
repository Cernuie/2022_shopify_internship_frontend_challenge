import React, {useState} from 'react';
import axios from 'axios'

export default function Input(props) {

  const [text, setText] = useState("")

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted', text, props)
    props.setInput(text)
  }
    return(
    <form className="Input" onSubmit={handleSubmit}>
      <label for="engines"> Choose an engine and then input your text:</label>
      <select name='engines' id='engines'>
        <option value={'text-curie-001'}> Curie </option>
        <option value={'text-davinci-002'}>Da Vinci </option>
        <option value={'text-babbage-001'}> Babbage </option>
        <option value={'text-ada-001'}> Ada </option>
      </select>
    <label>
      <input name="inputbox" class="inputbox" type="text" input="input" onChange={handleChange} />
    </label>
    <input type="submit" value="Submit"/>
    </form>
  )
}