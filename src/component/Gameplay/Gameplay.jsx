import Button from '../Button/Button'
import NumberSelector from '../NumberSelector/NumberSelector'
import RollDice from '../RollDice/RollDice'
import Rules from '../Rules/Rules'
import styles from './gameplay.modules.css'
import { useState } from 'react'

function Gameplay() {
    const[selectedNumber,setselecetedNumber] = useState()
    const [currentDice,setCurrentDice] = useState(1)
    const [score,setScore] = useState(0)
    const [error,setError] = useState()
    const [show,setshow] = useState(false)

    // const [reset,setReset] = useState()
 


    const generateRandomNumber =  (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    

    const rollDice = () => {
        if(!selectedNumber) {
            setError("You have not selected a number")
            return
        };

        setError("")

        

        const randomNumber = generateRandomNumber(1,7)
        setCurrentDice((prev) => randomNumber)

        if (selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber)
        }else {
            setScore((prev) => prev - 2)
        }

        setselecetedNumber(undefined)

        

    }

    const reseter = () => {
        setScore(0)
        setError("")
    }

    const ruleHandler = () => {
        Rules("")
    }
    
  return (
     
        <div className='hero'>
            <nav>
                <div className="totalscore">

                    <h1>{score}</h1>
                    <p>total score</p>
                </div>
                <div className="nuberselector">
                    <NumberSelector
                    
                    error ={error}
                    selectedNumber ={selectedNumber}
                    setselecetedNumber = {setselecetedNumber}
                    />
                </div>
            </nav>
            <content>
                <RollDice
                setshow = {setshow}
                show = {show} 
                 rulehandler = {ruleHandler} 
                reseter = {reseter}
                currentDice ={currentDice}
                setCurrentDice ={setCurrentDice}
                rollDice ={rollDice}/>
            </content>
            {show && <Rules/>}

        </div>
    // </div>
  )
}

export default Gameplay