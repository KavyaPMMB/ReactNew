import React, { useEffect, useState } from 'react'

function UseEffect1() {
    const [first, setfirst] = useState("Explore")
    useEffect(() => {
      alert(`${first}`)
    }, [first])
    
  return (
    <div>
        <h1>{first} your life</h1>
        <button onClick={()=>setfirst("Enjoy")}>Change</button>
    </div>
  )
}

export default UseEffect1