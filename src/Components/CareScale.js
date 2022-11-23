import React from 'react'

// const {scaleValue, careType} = props

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale(props ) {

    const scaleValue = props.scaleValue
    const careType = props.careType
    const range = [1, 2, 3]
    const scaleType = careType === 'light'?'🌞':'💧'
  return (
    // <div>{scaleValue}🌞</div>
    // {range.map((rangeElem) =>
    //     scaleValue >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null
    // )}
    <div onClick={() =>
      alert(
        `Cette plante requiert ${quantityLabel[scaleValue]} ${
          careType === 'light' ? 'de lumière' : "d'arrosage"
        }`
      )
    }>

     {range.map((rangeElem)=> scaleValue >= rangeElem ? (<span key={rangeElem.toString()}>{scaleType}</span> ): null
      )}
    </div>
    
        // scaleValue >= rangeElem ? <span key={rangeElem.toString()}>🌞</span> : null)
  
        
  )
}

export default CareScale