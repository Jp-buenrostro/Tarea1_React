import React from "react";

function HijoC() {
  console.log("Render HijoC");
  return <p>Soy Hijo C</p>;
}

export default React.memo(HijoC);
