import { useState } from 'react'
import Button from '../Button/Button'
// import { useState } from 'react'
 

const RollDice = ({currentDice,setCurrentDice,rollDice,reseter,setshow,show}) => {
    
     
    
    
  return (
    <div className="dice">
        <img src={`./images/dices/dice_${currentDice}.png`} alt="" 
        onClick={rollDice}/>
        <p>Click on Dice to roll</p>
        <btn>
            <Button 
            onClick = {reseter}

            isOutline={true}
            text="Reset Score"/>
            <Button 
            onClick = {() => setshow((prev) => !prev)}
            text={show ? "Hide Rules" :"Show Rules"}/>
        </btn>
    </div>
  )
}

export default RollDice