import React, {ComponentPropsWithoutRef, forwardRef, ChangeEvent} from 'react'



type InputProps = {
   type: string
   id:string
   label:string
   name: string
  
   onChange:(e:ChangeEvent<HTMLInputElement>)=>void
} & ComponentPropsWithoutRef<'input'>



const InputComponent = forwardRef<HTMLInputElement,  InputProps>(function Input({label, type, name,  onChange, id, ...props}, ref) {
  return (
    <>
    <label htmlFor={id}>{label}</label>
    <input
    ref={ref}
    id={id}
    type={type}
   
    onChange={onChange}
   
    {...props}
    />
    </>
  )
})

export default InputComponent