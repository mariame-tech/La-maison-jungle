import React, { useEffect } from 'react'
import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue,setInputValue]=useState('')
    function handleBlur(){
        if(!inputValue.includes('@')){
            alert('Attention,il n\'y a pas @,ceci n\'est pas une adresse valide')
        }
    }
//    useEffect(()=>{
//     alert("Mail enregistre")
//    })
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			{/* <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input 
            placeholder='Entrez votre email'
             value={inputValue}
             onChange={(e)=>setInputValue(e.target.value)}
             onBlur={handleBlur}
            /> */}

		</footer>

	)
}


export default Footer