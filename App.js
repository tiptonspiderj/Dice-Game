import { useState, useEffect, useRef } from "react"
import Die from "./components/Die"
import Timer from "./components/Timer"
import LoserCard from "./components/LoserCard"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {
    const [dice, setDice] = useState(allNewDice())
    const [numberRolls, setNumberRolls] =  useState(1)
    const [timesup, setTimesup] = useState(false)
    const tenzies = (dice.every(die => die.isHeld) && dice.every(die => die.value === die[0].value))
    const btnRef = useRef(null)    

    useEffect(()=>{
        console.log(tenzies)
        if (tenzies){            
            btnRef.current.focus()
        }
    }, [dice])
    
    function allNewDice() {
        return new Array(10)
            .fill(0)
            .map( num => {
                return {
                    value: Math.ceil(Math.random() * 6),
                    isHeld: false,
                    id: nanoid()
                }            
            } )
    }
    
    function rollDice() {
        if(tenzies || timesup) {
             //reset to a new game 
             setDice(allNewDice())
             setNumberRolls(1)
             setTimesup(false)
        } else {           
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    {...die, value: Math.ceil(Math.random() * 6)}
            }))
            setNumberRolls(numberRolls + 1)
        }        
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map( die => 
            ( die.id === id ? 
            {...die, isHeld: !die.isHeld}
            : die )
        ) ) 
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    return (
        <main>
            {tenzies && !timesup &&
                <Confetti drawShape={ctx => {
                    ctx.beginPath()
                    for(let i = 0; i < 22; i++) {
                    const angle = 0.35 * i
                    const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
                    const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
                    ctx.lineTo(x, y)
                    }
                    ctx.stroke()
                    ctx.closePath()
                    }} 
                />
            }
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.
            You have 30 seconds to win the game. Good luck!</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <div className="game-info">
                <Timer numberRolls={numberRolls} tenzies={tenzies} setTimesup={setTimesup}/>
                <button 
                    className="roll-dice" 
                    onClick={rollDice}
                    ref={btnRef}
                >
                    {(tenzies || timesup) ? "New Game" : "Roll"}
                </button>
                <h2>Rolls: {numberRolls}</h2>
            </div>
            { timesup && <LoserCard /> }
        </main>
    )
}