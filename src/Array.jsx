import React from "react";

function Array() {
  const flowers = [
    { name: "jasmine", color: "white" },
    { name: "Rose", color: "red" },
  ];
  return flowers.map((display) => (
    <div>
      <h1>
        flower name is {display.name} & {display.color} in color
      </h1>
    </div>
  ));
}

export default Array;
