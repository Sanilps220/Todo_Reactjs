import React,{useState, useEffect} from "react";

function Counter(){
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)
    
    useEffect(()=>{
        console.log('Mounting ')
        console.log('c2. . .'+count2)
        console.log('Updating. . .'+count)
    return function(){
            console.log('useEffect');
    }
      },[count,count2])     

    return(
        <div>
        <button onClick={()=>setCount(count+1)}>Add </button>
        <h1>Total click : {count}</h1>

        <button onClick={()=>setCount2(count2+1)}>Add </button>
        <h1>Total click : {count2}</h1>
        </div>
    )
}


export default Counter;