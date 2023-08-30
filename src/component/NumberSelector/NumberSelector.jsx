// import { useState } from "react"
// import styled from "styled-components"
import styles from "./numberselector.module.css"
const NumberSelector = ({selectedNumber,setselecetedNumber,error }) => {
  const  arrNumber = [1,2,3,4,5,6];
  
  
  return (
    <lft>
      <p>{error}</p>
        <container>
            
            {arrNumber.map((value,i) => (
            
              <box
                   
              className={`${styles.box} ${
                value === selectedNumber ? styles.black_box : styles.white_box
              }`}
              key ={i}
              onClick={() => setselecetedNumber(value)}
              
              // className={isSelected? styles.box: styles.white_box}
              >  
                {value}
              </box>
              
              ))}
        </container>
        <lfttext>Select number</lfttext>
    </lft> 
    
    // console.log("setselecetedNumber")
    
  )
}

export default NumberSelector

 