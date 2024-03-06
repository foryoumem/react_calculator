import {useState} from 'react';
import "./App.css"

function isOperator(string)
{
  if (string === "+" || string === "-" || string === "*" || string === "/")
    return true
  else
    return false
}

function getCalculatedResult(num1, num2, operator)
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
  const [currentScreenValue, setCurrentScreenValue] = useState("")
  const [prevNumber, setPrevNumber] = useState("")
  const [operator, setOperator] = useState("")

  // 계산기에서 연산자(+, -, *, /) 버튼을 눌렀을 때
  const operatorButtonEvent = (event) =>
  {
    const buttonValue = event.target.name

    if (currentScreenValue === "") return

    if (isOperator(currentScreenValue))
    {
      setCurrentScreenValue(buttonValue)
      return
    }

    setOperator(buttonValue)
    setPrevNumber(currentScreenValue)
    setCurrentScreenValue("")
  }

  // 계산기에서 "=" 버튼을 눌렀을 때
  const eqaulButtonEvent = () =>
  {
    if (currentScreenValue === "" || prevNumber === "" || operator === "") return

    const num1 = parseInt(prevNumber)
    const num2 = parseInt(currentScreenValue)
    const result = getCalculatedResult(num1, num2, operator)

    setCurrentScreenValue(result)
    setPrevNumber("")
    setOperator("")
  }

  // 계산기에서 C 버튼을 눌렀을 때
  const clearButtonEvent = () =>
  {
    setCurrentScreenValue("")
    setPrevNumber("")
    setOperator("")
  }

  // 계산기에서 숫자(0~9) 버튼을 눌렀을 때
  const numberButtonEvent = (event) =>
  {
    const buttonValue = event.target.name

    setCurrentScreenValue(currentScreenValue + buttonValue)
  }

  return (
    <div className="route">
      <div className="screen_area">
        <input className="screen_text" readOnly value={currentScreenValue}></input>
      </div>
      <div className="button_area">
        <div className="button_line">
          <button className="button_num" name="7" onClick={numberButtonEvent}>7</button>
          <button className="button_num" name="8" onClick={numberButtonEvent}>8</button>
          <button className="button_num" name="9" onClick={numberButtonEvent}>9</button>
          <button className="button_operator" name="*" onClick={operatorButtonEvent}>*</button>
        </div>
        <div className="button_line">
          <button className="button_num" name="4" onClick={numberButtonEvent}>4</button>
          <button className="button_num" name="5" onClick={numberButtonEvent}>5</button>
          <button className="button_num" name="6" onClick={numberButtonEvent}>6</button>
          <button className="button_operator" name="-" onClick={operatorButtonEvent}>-</button>
        </div>
        <div className="button_line">
          <button className="button_num" name="1" onClick={numberButtonEvent}>1</button>
          <button className="button_num" name="2" onClick={numberButtonEvent}>2</button>
          <button className="button_num" name="3" onClick={numberButtonEvent}>3</button>
          <button className="button_operator" name="+" onClick={operatorButtonEvent}>+</button>
        </div>
        <div className="button_line">
          <button className="button_clear" name="C" onClick={clearButtonEvent}>C</button>
          <button className="button_num" name="0" onClick={numberButtonEvent}>0</button>
          <button className="button_operator" name="/" onClick={operatorButtonEvent}>/</button>
          <button className="button_equal" name="=" onClick={eqaulButtonEvent}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;