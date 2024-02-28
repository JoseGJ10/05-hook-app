import { useState } from "react"

export const useCounter = (intialValue = 10) => {

    const [counter, setcounter] = useState( intialValue )

    const increment = (value = 1) => {
        setcounter( counter + value)
    }
    
    const decrement = (value = 1) => {
        if( counter === 0) return;
        setcounter( counter - value)
    }

    const reset = () => {
        setcounter( intialValue )
    } 

    return {
        counter,
        increment,
        decrement,
        reset
    }
}