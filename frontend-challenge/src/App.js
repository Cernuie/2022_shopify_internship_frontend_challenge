import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Input from './components/Input';
import Response from './components/Response';
function App() {

  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")

  useEffect(() => {
    let apiInput = input
  }, [input])

  return (
    <div className="App">
      <Input input={input} setInput={setInput} setResponse={setResponse}/>
      <Response input={input}/>
    </div>
  );
}

export default App;
