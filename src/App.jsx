// File: App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  // Update input as user types
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Perform calculation
  const calculate = () => {
    try {
      // Evaluate the input using eval (or use safer parsing for complex apps)
      const calcResult = eval(input); // Use with caution
      setResult(calcResult);
    } catch (error) {
      setResult('Error');
    }
  };

  // Clear input and result
  const clear = () => {
    setInput('');
    setResult(null);
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calculator">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter calculation"
        />
        <div className="buttons">
          <button onClick={calculate}>Calculate</button>
          <button onClick={clear}>Clear</button>
        </div>
        {result !== null && (
          <div className="result">
            <h2>Result: {result}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

// File: App.css
.App {
  text-align: center;
  font-family: Arial, sans-serif;
}

.calculator {
  margin: 20px auto;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.buttons button {
  padding: 10px 15px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
}

.buttons button:hover {
  background-color: #0056b3;
}

.result {
  margin-top: 20px;
  font-size: 1.2em;
  color: #333;
}
