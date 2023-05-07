import React, { useState } from 'react'

function SpreadOperator() {
    const [car, setcar] = useState({
        name:"BALENO",color:"NEXA BLUE"
    })
    const change=()=>{
        setcar((prevob)=>{
            return{...prevob,color:"DELTA BLUE"}
        })
    }
  return (
    <div>
        <h1> MY CAR IS MARUTI {car.name} , {car.color} IN COLOR</h1>
        <button onClick={change}>CHANGE</button>
    </div>
  )
}

export default SpreadOperator