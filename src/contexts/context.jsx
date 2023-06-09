import { createContext, useContext, useState } from "react";

const TwitterContext = createContext();
export const useGlobalContext = () => {
    return useContext(TwitterContext)
}

export const TwitterProvider = ({children}) => {
    const [tweets, setTweets] = useState([
        {nom: 'Segun Ojoo', 
        username: '@seggunn',
        date: 'May 12',
        tweet: 'hello world!'    
    }])
    const [textValue, setTextvalue] = useState('');
    const [auth, setAuth] = useState()
    const changeFunc = () => {
        setTextvalue()
    }
    
    return <TwitterContext.Provider value={{tweets,setTweets, textValue, setTextvalue, setAuth}}>
              {children}
          </TwitterContext.Provider>
}