import React from 'react'
// const {scaleValue, careType} = props
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
    range.map((rangeElem)=> scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null)
        // scaleValue >= rangeElem ? <span key={rangeElem.toString()}>🌞</span> : null)
  
        
  )
}

export default CareScale