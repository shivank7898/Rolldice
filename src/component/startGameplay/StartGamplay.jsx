import styles from './startgame.modules.css'
import Button from '../Button/Button'

const StartGamplay = ({toggle}) => {

  return (

    <div className="main">
     
      <div className="child1">
        <img src="\images\dices.png" alt="" />
        <div className="innerchild1">
          <h1>dice game</h1>
          <Button 
          onClick ={toggle}
          text ='play now'/>
        </div>
      </div>
    
    </div>
  )
}

export default StartGamplay