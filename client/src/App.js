import React from 'react';
import {useState, useEffect} from "react";
import SignUpForm from "./pages/SignUpForm/SignUpForm.tsx";

function App() {

    // const [backendData, setBackendData] = useState([{}]);
    // useEffect(()=> {
    //     fetch('/api').then(response=> response.json()).then(data => setBackendData(data))
    // },[])


  return (
    <div className="App">
        <SignUpForm />
    </div>
  );
}

export default App
