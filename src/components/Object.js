import React, { useState } from "react";



const Object=()=>{
let [count,setcount]=useState({gold:0,silver:0,brouze:0,})
function inc(){
    setcount({gold:count.gold+1,silver:count.silver+2,brouze:count.brouze+3})
    // console.log(count);
}
return(



    <div>
<h1>Gold:{count.gold}| Silver:{count.silver}| Brounze:{count.brouze}</h1>
<button onClick={inc}>Increase Gold</button>
<button>Increase Silver</button>
<button>Increase Brounze</button>

    </div>
)
}



export default Object;