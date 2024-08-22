
import { useMemo, useState } from 'react'
import './App.css'

function App() {

  const [weight, setWeight] = useState(80)
  const [height,setHeight] = useState(120)

  function onWeightChange(event) {
    setWeight(event.target.value)
  }

  function onHeightChange(event) {
    setHeight(event.target.value)
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;

    return (weight / (calculateHeight * calculateHeight)).toFixed('1');
    
    
  },[weight,height])

  return (
    <main>
      <h1>Project 4: BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg </p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        />
        <p className="slider-output"> Height: {height} cm</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="70"
          max="220"
          onChange={onHeightChange}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}

export default App
