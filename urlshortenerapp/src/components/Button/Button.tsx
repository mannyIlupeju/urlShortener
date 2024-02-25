import React, {type ReactNode, ComponentPropsWithoutRef}from 'react'

type Variant = 'contained' | 'outlined' | 'text'

type ButtonProp = {
    type?: string
    formType: 'Login' | 'Register' 
    children: ReactNode
    variant: Variant
    onAction?: (data:boolean)=> boolean

} & ComponentPropsWithoutRef<'button'>

const variantClasses: Record<string, string> = {
        contained: 'bg-blue-500 text-white w-48 p-2',
        outlined: 'bg-transparent text-blue-500 border border-blue-500',
        text: 'bg-none text-blue-500',
    };



function Button({children, type, formType, onAction, variant, ...props}:ButtonProp ) {

    const classes = `${variantClasses[variant]} your-other-classes`;

    return (
        <button {...props} className={classes} type={type}>
          {children}
        </button>
     )
    
  
}

export default Button