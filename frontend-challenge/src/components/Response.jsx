import React, {useEffect, useState} from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_OPENAI_SECRET
export default function Response(props) {
  const [responses, setResponses] = useState([])
  useEffect(() => {
    const data = {
      prompt: props.input,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
     };
    
     fetch(`https://api.openai.com/v1/engines/${props.model}/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(data),
     }).then(response => response.json())
     .then(data => 
      setResponses([...responses, data.choices[0].text]),
     )

     localStorage.setItem('responses', [...responses])
  }, [props.input])
   
    return(
        <div className="Response">
        <div>
        {responses.slice(1).reverse().map((a, i) => (
          <p key={i}>{a}</p>
        ))}
      </div>
      </div>
    )
}