import React, { useState } from 'react'
import "./App.css";

const App = () => {
  const [count,setcount]=useState(0);
  const increase=()=>{
setcount(count+1)
  };
  const decrease=()=>{
    setcount(count-1)
  };
  const reset=()=>{
setcount(0)
  };
  return (
    <div className='app'>
      <div className='card'>
<h1> React Counter app</h1>
<h2>{count}</h2>
<div className='buttons'>
<button onClick={decrease}>-</button>
<button onClick={reset}>Reset</button>
<button onClick={increase}>+</button>
</div>
      </div>
    </div>
  )
}

export default App
