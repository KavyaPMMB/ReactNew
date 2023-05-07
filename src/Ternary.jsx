import React, { useState } from 'react'
import Mapcarousel from './Mapcarousel'

function Ternary() {
    const [hide,sethide] = useState(false)
    const click=()=>{
        sethide((dis)=>! dis)
    }
  return (
    <div>
        {hide ? <Mapcarousel/>:""}
        <button onClick={click}>{hide===true ? "hide":"show"}</button>
    </div>
  )
}

export default Ternary