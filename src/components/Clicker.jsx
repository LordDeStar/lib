import { useEffect, useState } from "react";

export const Clicker = ()=>{
    const [count, setCount] = useState(0);
    const [changing, setChanging] = useState('')
    let className = ''; 
    const handleClick = ()=>{
        setChanging('')
        setTimeout(()=>{
            setCount(count+ 1);
            setChanging('changing')
        }, 300);
    }
    return (
        <div className="clicker">
        <h1 className={changing}>{count}</h1>
        <button onClick={()=>{handleClick()}}>Click me</button>
        </div>
    );
}