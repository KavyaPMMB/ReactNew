import React from 'react'

function SpreadSimple() {
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = [...array1, ...array2];
console.log(newArray);

const obj1 = {a: 1, b: 2};
const newObj = {...obj1, c: 3};
console.log(newObj); 


  return (
    <div>
    </div>
  )
}

export default SpreadSimple