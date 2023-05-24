import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calculator = () => {
  // Step 1: Define state variables
  const [displayValue, setDisplayValue] = useState('');
  const [chosenNumbers, setChosenNumbers] = useState([]);

  // Step 2: Define event handlers for number buttons
  const handleNumberClick = (number) => {
    setDisplayValue((prevValue) => prevValue + number);
  };

  // Step 3: Define event handlers for operator buttons
  const handleOperatorClick = (operator) => {
    setDisplayValue((prevValue) => prevValue + operator);
  };

  // Step 4: Define event handler for clear button
  const handleClearClick = () => {
    setDisplayValue('');
  };

  // Step 5: Define event handler for equals button
  const handleEqualsClick = () => {
    try {
      const result = eval(displayValue); // Note: Using eval is not recommended for production apps
      setDisplayValue(result.toString());
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="calculator-display">{displayValue}</div>
      <div className="calculator-chosen-numbers">
        <h3>Chosen Numbers:</h3>
        <ul>
          {chosenNumbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
      <div className="calculator-buttons">
        <div className="calculator-row">
          {/* Step 6: Render number buttons */}
          <Button variant="primary" onClick={() => handleNumberClick('7')}>7</Button>
          <Button variant="primary" onClick={() => handleNumberClick('8')}>8</Button>
          <Button variant="primary" onClick={() => handleNumberClick('9')}>9</Button>
          <Button variant="primary" onClick={() => handleOperatorClick('+')}>+</Button>
        </div>
        <div className="calculator-row">
          <Button variant="primary" onClick={() => handleNumberClick('4')}>4</Button>
          <Button variant="primary" onClick={() => handleNumberClick('5')}>5</Button>
          <Button variant="primary" onClick={() => handleNumberClick('6')}>6</Button>
          <Button variant="primary" onClick={() => handleOperatorClick('-')}>-</Button>
        </div>
        <div className="calculator-row">
          <Button variant="primary" onClick={() => handleNumberClick('1')}>1</Button>
          <Button variant="primary" onClick={() => handleNumberClick('2')}>2</Button>
          <Button variant="primary" onClick={() => handleNumberClick('3')}>3</Button>
          <Button variant="primary" onClick={() => handleOperatorClick('*')}>*</Button>
        </div>
        <div className="calculator-row">
          <Button variant="primary" onClick={() => handleNumberClick('0')}>0</Button>
          <Button variant="primary" onClick={() => handleOperatorClick('/')}>/</Button>
          <Button variant="danger" onClick={handleClearClick}>Clear</Button>
          <Button variant="success" onClick={handleEqualsClick}>=</Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
