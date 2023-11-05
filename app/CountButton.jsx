import { useState, useEffect } from "react"
 
 export default function CountButton() {
    let [count, setCount] = useState(0)
    
    function handleClick() {
        if (count % 2 === 0) {
          setCount(count + 1);
        } else {
          setCount(count + 2);
        }
      }
    
    function rollOverCount(){
        if(count > 10) {
            setCount(0)
        }
    }
   
    useEffect(rollOverCount, [count])
   
    return (
      <div>
      <button onClick={handleClick}>Increment</button>
      <div>{count}</div>
      </div>
    )
  }