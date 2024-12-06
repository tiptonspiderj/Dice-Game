import { useState, useEffect } from "react"

export default function Timer(props) {
    // Initial time in seconds
    const initialTime = 30
    const [timeRemaining, setTimeRemaining] = useState(initialTime)
  
    useEffect(() => {
      const timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (props.numberRolls === 1) {
            return prevTime = initialTime
          } else if (prevTime < 0) {
            clearInterval(timerInterval)
            props.setTimesup(true)
            // Perform actions when the timer reaches zero
            return 0           
          } else if (props.tenzies) {
            return prevTime
          } else {
            return prevTime - 0.01
          }
        })
      }, 10)  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(timerInterval)
    }, [props]) // The dependency array ensures the effect runs when our props change
  
    const seconds = Math.ceil(timeRemaining % 60)
  
    return (
      <div>
        <h2>Timer: {`${seconds}s`}</h2>
      </div>
    )
  }
  
  