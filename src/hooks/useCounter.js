import { useState } from "react"

const useCounter = (variable,variable1) => {
    

    const [counter, setCounter] = useState(variable)

    const plusOne = () => setCounter(counter + 1)
    const minusOne = () => setCounter(counter - 1)
    const reset = () => setCounter(variable1)


  return {plusOne, minusOne, reset, counter}


}

export default useCounter