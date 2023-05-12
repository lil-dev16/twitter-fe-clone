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
    
    return <TwitterContext.Provider value={{tweets}}>
        {children}
    </TwitterContext.Provider>
}