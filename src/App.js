import React, { useState } from 'react';
import "./App.css";
import Form from './Components/Form';
import List from './Components/Box';



function App() {

  const [box, setBox] = useState([]);


  const newItem = (data) => {
    console.log(data);
    setBox([...box, data]);
  }

  return (
        <>
        <Form newItem={newItem} />        
        <List box={box}/>
        </>
        
  )
}

export default App;
