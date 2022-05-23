import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Input from './components/Input';
import Response from './components/Response';

function App() {

  const [input, setInput] = useState("")
  const [model, setModel] = useState("text-curie-001")  
  return (
    <div className="App">
      <Input input={input} setInput={setInput} setModel={setModel} />
      <Response input={input} model={model}/>
    </div>
  );
}

export default App;
