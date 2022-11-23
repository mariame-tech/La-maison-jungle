import React from 'react'
import CareScale from './CareScale'
import '../styles/PlantItem.css'

// function handleClick(plantName){
//     alert(`Vous avez achete 1 ${plantName}? Tres bon choix✨`)
// }
function PlantItem({id,name,cover,water,light}) {
  return (
    // utilisation evenement :<li key={id} className='lmj-plant-item' onClick={()=> handleClick(name)}>
      <li key={id} className='lmj-plant-item' >
        <img src={cover} alt={`${name} cover`} className='lmj-plant-item-cover'/>
        {name}
        <div>
          <CareScale careType='water' scaleValue={water}/>
          <CareScale careType='light' scaleValue={light}/>
        </div>
        
    </li>

  )
}

export default PlantItem