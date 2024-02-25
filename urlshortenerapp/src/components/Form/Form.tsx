import React, {FormEvent, ComponentPropsWithoutRef, ReactNode} from 'react'
import { FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import Button from '../Button/Button'
import { useGlobalContext } from '@/context/context';



type FormProps = {
    onSubmit:()=> void
    children: ReactNode
    formType: 'Login' | 'Register'
} & ComponentPropsWithoutRef<'form'>



function Form({onSubmit, children, formType, ...props}:FormProps) {

  function handleSubmit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }


  return (
    <form onSubmit={handleSubmit} {...props} className="bg-gray-800 bg-opacity-75 flex flex-col  justify-center items-center rounded-lg shadow-lg fixed inset-0 z-40 h-screen">
        <div className=" flex flex-col gap-2 justify-center max-w-md mx-auto bg-zinc-400 w-96 p-8">
            <div className="relative bottom-3 left-72">
              <FaTimes size="1.4rem" className="cursor-pointer text-yellow-800" />
            </div>
           <div className="flex justify-center text-xl">
            {formType}
           </div>
            {children}
            <div className="flex justify-center mt-8 cursor-pointer">
            <Button 
              type="submit"
              variant="contained" 
              color="primary"
              formType={formType} 
              >
                {formType}
            </Button>
            </div>
        </div>
    </form>
  )
}

export default Form