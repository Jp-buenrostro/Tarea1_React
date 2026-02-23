import React from "react";

function HijoA() {
    console.log("Render HijoA");
    return <p>Soy Hijo A</p>;
}

export default React.memo(HijoA);
