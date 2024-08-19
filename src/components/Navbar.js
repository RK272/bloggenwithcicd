import React from 'react'

import { NavLink } from 'react-router-dom'




const Navbar = () => {
  
  return (
    <div>
      <nav className='flex  justify-between items-center h-40 max-w-6xl mx-auto '>
        
        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6 padding-top: 20px'>
          

          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/login">
            <p>Login</p>
          </NavLink>
          <NavLink to="/signup">
            <p>signup</p>
          </NavLink>
          
          
         
        
       

      </div>
      
    </nav>
    </div>
  )
}

export default Navbar
