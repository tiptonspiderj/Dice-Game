import React from "react"

export default function Timer(props) {
    // Initial time in seconds
    const initialTime = 30
    const [timeRemaining, setTimeRemaining] = React.useState(initialTime)
  
    React.useEffect(() => {
      const timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (props.numberRolls === 1) {
            return prevTime = initialTime
          } else if (prevTime === 0) {
            clearInterval(timerInterval);
            // Perform actions when the timer reaches zero
            return 0           
          } else if (props.tenzies) {
            return prevTime
          } else {
            return prevTime - 1
          }
        })
      }, 1000)  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(timerInterval)
    }, [props]) // The empty dependency array ensures the effect runs only once on mount
  
    const seconds = timeRemaining % 60
  
    return (
      <div>
        <h2>Timer: {`${seconds}s`}</h2>
      </div>
    )
  }
  
  