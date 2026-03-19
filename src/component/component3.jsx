import React, { useState } from "react";

function Counters() {
  const [count, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <h2>count:{count}</h2>

      <button onClick={()=>setCounter(count+1)}>increment</button>
      <button onClick={()=>{
        if(count >0){
            setCounter(count-1)
        }
        else{
            setCounter(0)
        }
        }}>decrement</button>
      <button onClick={()=>setCounter(0)}>reset</button>
    </div>
  );
}

export default Counters;
