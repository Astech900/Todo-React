import { useState } from "react";

 export default function Counterss (){
    let [count , setCount] = useState(0);

    let inCount = () =>{
        console.log(count)
      setCount(prevCount => prevCount + 1)
      setCount(prevCount => prevCount + 1)
    }


    return(
        <div>
            <h2>{count}</h2>
            <button onClick={inCount}>Incratement</button>
        </div>
    )
}