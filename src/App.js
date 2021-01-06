import './App.css';
import React, { useState,useEffect } from 'react';

function App() {




  const handleClick = (val) => {
    if (val=='='){
      var operands = outputNum.split("+")
      console.log(operands)
      setResult(eval(outputNum))
      setResultBool(true)
      setOutputNum("")

    }
    else if (val=='AC'){
      setOutputNum(outputNum.substring(0,outputNum.length-1))
      setResult(0)
    }
    else{
      setResultBool(false)
      setOutputNum(outputNum.concat(val))

    }
    
    
  }

  const [outputNum,setOutputNum] = useState("")
  const [result,setResult] = useState(0)
  const [resultbool, setResultBool] = useState(true)
  return (
    <div className="app">
      <div className="app__navbar">
      <h1>Calculator</h1>
      </div>
      <div className="app__body">
        {resultbool==false ? <h1>{outputNum}</h1> : <h1>{result}</h1>

        }
        
        <table>
        <tr>  
              <td onClick={()=>handleClick("(")} >(</td>
              <td onClick={()=>handleClick(")")}>)</td>
              <td onClick={()=>handleClick("%")}>%</td>
              <td onClick={()=>handleClick("AC")}>AC</td>
            </tr>
            <tr>  
              <td onClick={()=>handleClick(1)} >1</td>
              <td onClick={()=>handleClick(2)}>2</td>
              <td onClick={()=>handleClick(3)}>3</td>
              <td onClick={()=>handleClick("+")}>+</td>
            </tr>
            <tr>
              <td onClick={()=>handleClick(4)}>4</td>
              <td onClick={()=>handleClick(5)}>5</td>
              <td onClick={()=>handleClick(6)}>6</td>
              <td onClick={()=>handleClick("-")}>-</td>
            </tr>
            <tr>
              <td onClick={()=>handleClick(7)}>7</td>
              <td onClick={()=>handleClick(8)}>8</td>
              <td onClick={()=>handleClick(9)}>9</td>
              <td onClick={()=>handleClick("*")}>x</td>
            </tr>
            <tr>
              <td onClick={()=>handleClick(0)}>0</td>
              <td onClick={()=>handleClick(".")}>.</td>
              <td onClick={()=>handleClick("=")}>=</td>
              <td onClick={()=>handleClick("/")}>/</td>
            </tr>
           
          </table>
      </div>
        
    </div>
  );
}

export default App;
