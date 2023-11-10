
import React, { useState } from 'react'
import Board from './Board'
import donkey from '../assets/Images/donkey.png'
import shrek from '../assets/Images/shrek.png'



interface SquareProps{
    value: string | null;
    onSquareClick: () => void;
}

const Square = ({value, onSquareClick}: SquareProps) => {

  const [valuestate, setValueState] = useState(null)

//   function handleClick(){
//     console.log('clicked')
//     setValueState('X');
//   }

function getImage(){
  if(value === 'Donkey'){
    return <img className='donkey' src={donkey} alt="Donkey" />;
  }
  else if(value ==='Shrek'){
    return <img className='shrek' src={shrek} alt="Shrek" />;
  }
  else{
    return null
  }


}


  return (
 
     <>
     <button className="square" onClick={onSquareClick}>{getImage()}</button>
     </> 
    
      

  )
}

export default Square



