import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function UseState() {
    const [lyf,setlyf] = useState("Explore")
  return (
    <div>
        <h1>{lyf} Your Life </h1>
        <Button onClick={()=>setlyf("Enjoy")}>Change</Button>
    </div>
  )
}

export default UseState