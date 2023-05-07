import React, { useState } from "react";

function SpreadOperator2() {
  const [first, setfirst] = useState({ name: "John", salary: 40000 });
  const change = () => {
    setfirst((prevob) => {
      return { ...prevob, salary: 50000 };
    });
  };
  return (
    <div>
      <h3>
        {first.name} {first.salary}
      </h3>
      <button onClick={change}>Change</button>
    </div>
  );
}

export default SpreadOperator2;
