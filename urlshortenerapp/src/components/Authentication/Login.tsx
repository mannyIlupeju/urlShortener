import React from 'react'
import InputComponent from '../Input/Input'
import Form from '../Form/Form'
import { useGlobalContext } from '@/context/context'


function Login() {
 const {checkUserData, setCheckUserData} = useGlobalContext()

  function handleLogin() {
    
  }
 
  

  return (
    <Form onSubmit={handleLogin} formType="Login">
      <InputComponent
        type='email'
        id='email'
        name='Email'
        label='Email'
       className="flex flex-col gap-12 text-zinc-800"
        onChange={(e) => {
          setCheckUserData(currentState => ({ ...currentState, email:e.target.value }));
        }}
      />
      <InputComponent
        type='password'
        id='password'
        name="password"
        label='Password'
       className="flex flex-col gap-12 text-zinc-800"
        onChange={(e) => {
          setCheckUserData(currentState => ({ ...currentState, password:e.target.value }));
        }}
      />
    </Form>
  )
}

export default Login