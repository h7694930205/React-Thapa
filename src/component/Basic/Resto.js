import React, { useState } from 'react'
import "./style.css"
import Menu from './manu'
import ManuCard from './ManuCard'

const Resto = ()=> {
  const [manuData,setManuData ] = useState(Menu);
  return (
    <>  
    <ManuCard manuData={manuData}/>  
    </>
  )
}

export default Resto
