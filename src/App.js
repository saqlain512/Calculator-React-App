
import React from 'react'
import './index.css';
import { useState } from 'react';

const App = () => {
  const [cal, setcal] = useState("0");
  const updateCal = (value) => {
    setcal(cal + value)
  }
  const createDigit = () => {
    const digit = []

    for (let i = 1; i < 10; i++) {
      digit.push(<button onClick={() => updateCal(i.toString())} key={i}>{i}</button>)


    }
    return digit

  }
  const Calculate = () => {
    try {
  
      const result = new Function('return ' + cal)();
      setcal(result.toString());
    } catch (error) {
      
      setcal("Error");
    }
  };
  const deleteLastCharacter = () => {
    setcal(cal.slice(0, -1)); 
  };




  return (
    <div className='Container'>
      <div className="cals">
        <div className='display'>
          {cal || "0"}
        </div>
        <div className='operator'>
          <button onClick={() => updateCal('/')}>/</button>
          <button onClick={() => updateCal('*')}>*</button>
          <button onClick={() => updateCal('+')}>+</button>
          <button onClick={() => updateCal('-')}>-</button>
          <button onClick={deleteLastCharacter}>DEL</button>

        </div>
        <div className='digits'>
          {createDigit()}
          <button onClick={() => updateCal('0')}>0</button>
          <button onCanPlay={() => updateCal('.')}>.</button>
          <button onClick={Calculate}>=</button>
        </div>
      </div>

    </div>
  )
}

export default App
