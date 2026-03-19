import React, { useEffect, useState } from 'react'

function Timer({id}) {
    const[seconds,setSeconds]=useState(0)


    useEffect(()=>{
        console.log(`Timer ${id} started`);
        const Interval=setInterval(()=>{
            setSeconds((prev)=>prev+1)
        },1000);


        return () => {
        clearInterval(Interval);
        console.log(`Timer ${id} stopped`);
        };
    },[]);
        
  return (
    <div   style={{border:"1px",boxShadow:"1px rgba(0,0,0,0.5)"}}>
        Timer {id}:{seconds} second(s)
    </div>
  );
}

export default Timer