import React from 'react';
import {useState, useEffect} from "react";

function App() {

    const [backendData, setBackendData] = useState([{}]);
    useEffect(()=> {
        fetch('/api').then(response=> response.json()).then(data => setBackendData(data))
    },[])

  return (
    <div className="App">
        <p>Hello World</p>
    </div>
  );
}

export default App;
