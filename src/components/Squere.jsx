import { useState } from "react";

export const Squere = ()=>{
    const [figure, setFigure] = useState('squere');
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState('Enter the number and click hte calck button');
    const handleSelect = (e)=>{
        setFigure(e.target.value);
    }
    const handleChange = (e)=>{
        setNumber(parseInt(e.target.value))
    }
    let placeholder = `Enter the ${figure}'s ${(figure === 'squere') ? 'side' : 'radius'}`
    
    let calc = ()=>{
        let res = (figure === 'squere') ? number*number : Math.PI * number*number;
        setResult(`Squere of the ${figure}: ${res}`)
    }
    return (
        <div className="squere">
            <select onChange={(e)=>handleSelect(e)}>
                <option value="squere">Squere</option>
                <option value="circle">Circle</option>
            </select>
            <input type="number" placeholder={placeholder} onChange={(e)=>{handleChange(e)}}/>
            <button onClick={()=>{calc()}}>Calc</button>
            <br />
            <h1>{result}</h1>
        </div>
    );
}