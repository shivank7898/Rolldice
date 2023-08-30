import StartGamplay from "./component/startGameplay/StartGamplay";
import styles from "./App.css"
import { useState } from "react";
import Gameplay from "./component/Gameplay/Gameplay";

const App = () => {
  const[GameStarted,setGameStarted] = useState(false)
     
  const togglebutton = () =>{
    setGameStarted((prev) => !prev)
  }

  return (

    <div>
      {GameStarted ? <Gameplay /> : <StartGamplay toggle={togglebutton}/> }
    </div> 
  )
}

export default App;
