//Context to share the url shortened link when it's received
import {type ReactNode, createContext, useContext, useState} from 'react'



type LoadingContextProviderProps = {
    children: ReactNode;
}


type GlobalContextType = {
    isLoading: boolean;
    shortenedUrl: string | null;
    setIsLoading: (loadingData:boolean) => void;
    setShortenedUrl: (url:string | null) => void
}


const GlobalContext = createContext<GlobalContextType | null >(null)

export function useGlobalContext(){
    const globalContext = useContext(GlobalContext)

    if(globalContext === null){
        throw new Error ('Global Context cannot be null ')
    }

    return globalContext;
} 


const AppContext = ({children}: LoadingContextProviderProps) => {
 const [shortenedUrl, setShortenedUrl] = useState<string | null>(null)
 const [isLoading, setIsLoading] = useState<boolean>(false)
 console.log(shortenedUrl)

 const ctx:GlobalContextType = {
    setShortenedUrl,
    isLoading,
    setIsLoading,
    shortenedUrl
 }



 return (
     <GlobalContext.Provider value={ctx}>
     {children}
     </GlobalContext.Provider>
 );
     
}
export default AppContext