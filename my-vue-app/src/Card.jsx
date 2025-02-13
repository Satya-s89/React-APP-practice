import React, { useState } from 'react'
import "./App.css";


// eslint-disable-next-line react/prop-types
const Card = ({data}) =>{
    const[count,setCount] = useState(1);
    const[price,setPrice] = useState(data.price);
    function incrementCount(){
        setCount(count+1);
    }
    function decrementCount(){
        if(count>1){
        setCount(count-1);
        }
    }
    function reset(){
        setCount(1);
    }
    return (
        <div className="card">
            <img src={data.image} alt={data.title}/>
            <h3>{data.title}</h3>
            <p>{data.price*count}</p>
            <button onClick={decrementCount}>-</button>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
            <button onClick={reset}>=</button>
        </div>
    )
}

export default Card