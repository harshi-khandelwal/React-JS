import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  

  const addValue = () => {
  console.log("clicked", counter);

  setCounter(counter + 1)
  }

  const removeValue = () => {
    console.log("clicked", counter)
  
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>counter value : {counter}</h2>
    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >remove value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
