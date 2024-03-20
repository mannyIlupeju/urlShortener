//Context to share the url shortened link when it's received
import {type ReactNode, createContext, useContext, useState} from 'react'

type LoadingContextProviderProps = {
    children: ReactNode;
}

interface UserData {
  name: string;
  email: string;
  password: string;
  retype: string;
}



type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;

type GlobalContextType = {
    isLoading: boolean;
    shortenedUrl: string | null;
    userData: UserData
    setUserData: SetStateType<UserData>
    isLoggedIn: boolean
    isRegistered: boolean
    checkUserData: userLoginData
    setCheckUserData:SetStateType<userLoginData>
    urlShortenerValue: string
    setIsRegistered:(register:boolean)=>void
    setIsLogin:(login:boolean)=> void
    setIsLoading: (loadingData:boolean) => void;
    setShortenedUrl: (url:string | null) => void

}

interface userLoginData {
    email: string
    password: string
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
 const [userData, setUserData] = useState<UserData>({name: '', email: '', password: '', retype: ''})
 const [checkUserData, setCheckUserData] = useState<userLoginData>({email: '', password: ''});
 const [isLoggedIn, setIsLogin] = useState<boolean>(false)
 const[isRegistered, setIsRegistered] = useState<boolean>(false)
//urlShortener value edit - shortener.bio not authentic yet

 const urlShortenerValue = `localhost:3000/${shortenedUrl}`

 const ctx:GlobalContextType = {
    urlShortenerValue,
    setShortenedUrl,
    isLoading,
    setIsLoading,
    shortenedUrl,
    userData,
    setUserData,
    isLoggedIn,
    setIsLogin,
    isRegistered,
    setIsRegistered,
    checkUserData,
    setCheckUserData
 }



 return (
     <GlobalContext.Provider value={ctx}>
     {children}
     </GlobalContext.Provider>
 );
     
}
export default AppContext