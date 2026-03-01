import React from "react";

function HijoB() {
  console.log("Render HijoB");
  return <p>Soy Hijo B</p>;
}

export default React.memo(HijoB);