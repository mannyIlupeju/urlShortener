import React from 'react'
import Link from 'next/link'
import { useGlobalContext } from '@/context/context'

function Navigation() {
  const {isLogin, setIsLogin} = useGlobalContext()
   
  function toggleLoginModal(){
    console.log('login modal opened')
    setIsLogin(!isLogin)
  }

  function toggleRegisterModal(){
    console.log('register modal opened')
  }

  return (
    <nav className="flex justify-between md:flex-row flex-col p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 text-center">
            Shorten-Link
        </h1>
        <div className="flex md:gap-12 gap-4 justify-center">
          <button 
          onClick={toggleLoginModal}>
            <p>Login</p>
          </button>
          <button 
          onClick={toggleRegisterModal}>
            <p>Sign Up</p>    
          </button>
        </div>
    </nav>
  )
}

export default Navigation