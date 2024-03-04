import { useState } from 'react';
import "./App.css"

function getCalculateResult(num1, num2, operator)
{
  if (operator === "+")
  {
    return num1 + num2
  }
  else if (operator === "-")
  {
    return num1 - num2
  }
  else if (operator === "*")
  {
    return num1 * num2
  }
  else if (operator === "/")
  {
    return num1 / num2
  }
  else
  {
    return "operator error"
  }
}

function App()
{
  let [currentButtonValue, setCurrentButtonValue] = useState("")
  let [prevNumber, setPrevNumber] = useState("")
  let [operator, setOperator] = useState("")

  const buttonEvent = (event) =>
  {
    const buttonValue = event.target.name

    if (buttonValue === "=")
    {
      if (currentButtonValue !== "" && prevNumber !== "" && operator !== "")
      {
        const num1 = parseInt(prevNumber)
        const num2 = parseInt(currentButtonValue)
        const result = getCalculateResult(num1, num2, operator)

        setCurrentButtonValue(result)
        setPrevNumber("")
        setOperator("")
      }
    }
    else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/")
    {
      if (currentButtonValue !== "")
      {
        setOperator(buttonValue)
        setPrevNumber(currentButtonValue)
        setCurrentButtonValue("")
      }
      else return
    }
    else if (buttonValue === "C")
    {
      setCurrentButtonValue("")
      setPrevNumber("")
      setOperator("")
    }
    else // 숫자
    {
      setCurrentButtonValue(currentButtonValue + buttonValue)
    } 
  }

  return (
    <div className="route">
      <div className="screen_area">
        <input className="screen_text" readOnly value={currentButtonValue}></input>
      </div>
      <div className="button_area">
        <div className="button_line">
          <button className="button_num" name="7" onClick={buttonEvent}>7</button>
          <button className="button_num" name="8" onClick={buttonEvent}>8</button>
          <button className="button_num" name="9" onClick={buttonEvent}>9</button>
          <button className="button_operator" name="*" onClick={buttonEvent}>*</button>
        </div>
        <div className="button_line">
          <button className="button_num" name="4" onClick={buttonEvent}>4</button>
          <button className="button_num" name="5" onClick={buttonEvent}>5</button>
          <button className="button_num" name="6" onClick={buttonEvent}>6</button>
          <button className="button_operator" name="-" onClick={buttonEvent}>-</button>
        </div>
        <div className="button_line">
          <button className="button_num" name="1" onClick={buttonEvent}>1</button>
          <button className="button_num" name="2" onClick={buttonEvent}>2</button>
          <button className="button_num" name="3" onClick={buttonEvent}>3</button>
          <button className="button_operator" name="+" onClick={buttonEvent}>+</button>
        </div>
        <div className="button_line">
          <button name="C" onClick={buttonEvent}>C</button>
          <button className="button_num" name="0" onClick={buttonEvent}>0</button>
          <button className="button_operator" name="/" onClick={buttonEvent}>/</button>
          <button className="button_equal" name="=" onClick={buttonEvent}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;