import React, {type ReactNode, ComponentPropsWithoutRef}from 'react'

type Variant = 'contained' | 'outlined' | 'text' | 'facebook' | 'twitter' | 'linkedin' | 'copyUrl'

type ButtonProp = {
    type?: string
    formType?: 'Login' | 'Register' | 'Copy Url' 
    children: ReactNode
    variant: Variant
    onAction?: (data:boolean)=> boolean

} & ComponentPropsWithoutRef<'button'>

const variantClasses: Record<string, string> = {
        contained: 'bg-blue-500 text-white w-48 p-2',
        outlined: 'bg-transparent text-blue-500 border border-blue-500',
        text: 'bg-none text-blue-500',
        facebook: 'bg-blue-600 text-white w-fit p-2',
        twitter: 'bg-zinc-800 text-white w-fit p-2',
        linkedin: 'bg-blue-400 text-white w-fit p-2',
        copyUrl: 'bg-green-700 text-white w-fit p-2'
    };


    
    function Button({children, type, formType, onAction, variant, ...props}:ButtonProp ) {
        
    let classes = `${variantClasses[variant]} your-other-classes`;
        
    return (
        <button {...props} className={classes} type={type}>
          {children}
        </button>
     )
    
  
}

export default Button