import React from 'react'
import InputComponent from '../Input/Input';
import Form from '../Form/Form'
import { useGlobalContext } from '@/context/context'



// interface UserData {
//   name: string;
//   email: string;
//   password: string;
//   retype: string;
// }

export default function Register() {
  const {userData, setUserData} = useGlobalContext();

  const handleSubmit = async() => {
    console.log(userData)
     const response = await fetch('/api/Register/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
     });

     const data = await response.json()
     console.log(data)
  }
  




  return (
    <Form onSubmit={handleSubmit} formType="Register">
      <InputComponent
        type='text'
        id='name'
        name='name'
        label='Full Name'
       className="flex flex-col gap-12 text-zinc-800"
        onChange={(e) => {
          setUserData(currentState => ({ ...currentState, name:e.target.value }));
        }}
      />
      <InputComponent
        type='email'
        id='email'
        name='Email'
        label='Email'
       className="flex flex-col gap-12 text-zinc-800"
        onChange={(e) => {
          setUserData(currentState => ({ ...currentState, email:e.target.value }));
        }}
      />
      <InputComponent
        type='password'
        id='password'
        name="password"
        label='Password'
       className="flex flex-col gap-12 text-zinc-800"
        onChange={(e) => {
          setUserData(currentState => ({ ...currentState, password:e.target.value }));
        }}
      />
      <InputComponent
        type='password'
        id='password2'
        name="Retype password"
        label='Retype Password'
        className="flex flex-col gap-12 text-zinc-800"
        onChange={(e) => {
          setUserData(currentState => ({ ...currentState, retype:e.target.value }));
        }}
      />
    </Form>
  )
}
