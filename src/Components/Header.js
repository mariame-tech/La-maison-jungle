import React from 'react'

import '../styles/Header.css'


function Header({children}) {
    
  return (
    <div className="lmj-banner">
        {children}
    </div>
    
  )
}

export default Header