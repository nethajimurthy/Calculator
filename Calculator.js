import React from 'react'
import { useState } from 'react'

const Calculator = () => {

    const [calcval,setCalc]= useState('')

    const compute=()=>{
        const total=eval(calcval)
        setCalc(total)
    }

    const Handle=(e)=>{
        const newval=calcval+e.target.value
        setCalc(newval)
    }

  return (
    <div>
        <header><h1>Calculator</h1></header>
        <input id='input' value={calcval} onChange={(e)=>setCalc(e.target.value)}/>
        <button onClick={()=>setCalc('')}>C</button>
        <div className='Buttonarea'>
            <button onClick={(e)=>Handle(e)} value='1'>1</button>
            <button onClick={(e)=>Handle(e)} value='2'>2</button>
            <button onClick={(e)=>Handle(e)} value='3'>3</button>
            <button onClick={(e)=>Handle(e)} value='/'>/</button>
            <button onClick={(e)=>Handle(e)} value='4'>4</button>
            <button onClick={(e)=>Handle(e)} value='5'>5</button>
            <button onClick={(e)=>Handle(e)} value='6'>6</button>
            <button onClick={(e)=>Handle(e)} value='-'>-</button>
            <button onClick={(e)=>Handle(e)} value='7'>7</button>
            <button onClick={(e)=>Handle(e)} value='8'>8</button>
            <button onClick={(e)=>Handle(e)} value='9'>9</button>
            <button onClick={(e)=>Handle(e)} value='+'>+</button>
            <button onClick={(e)=>Handle(e)} value='.'>.</button>
            <button onClick={(e)=>Handle(e)} value='0'>0</button>
            <button onClick={compute}>=</button>
            <button onClick={(e)=>Handle(e)} value='*'>*</button>
        </div>
    </div>
  )
}

export default Calculator;