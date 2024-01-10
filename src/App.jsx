import { useState } from 'react';
import './App.css'

function App() {

    let [counter,setCounter]=useState(0);
    function Increasevalue()
    {
        setCounter(counter+1);
    }
    function DecreaseValue()
    {
      setCounter(counter-1);
    }

  return (
    < >
      <h1>Counter</h1>
      <h2>Result: {counter}</h2>
      <br />
      <button onClick={Increasevalue}>Increase</button>
      <button onClick={DecreaseValue}>Decrease</button>
    </>
  )
}

export default App
