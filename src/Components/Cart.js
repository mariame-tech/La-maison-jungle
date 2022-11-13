import React from 'react'
import '../styles/Cart.css'

function Cart() {
    const prix1= 8
    const prix2= 10
    const prix3= 15
    
  return (
    
    <div className='lmj-cart'>
      <h2>Panier</h2>
      <ul>
        <li>{'Monstera: '+ prix1}£</li>
        <li>{'Lierre: '+ prix2}£</li>
        <li>{"Fleurs:"+ prix3 }£</li>
      </ul> 
      <p>Total:{ prix1 + prix2 + prix3}£</p> 
    </div>
  )
}

export default Cart