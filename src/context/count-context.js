import { createContext, useContext, useState } from "react";

const CountContext = createContext(); // returns an object

const CountProvider = ({children}) =>{
    const [count, setCount] = useState(0);
    return(
        <CountContext.Provider value={{count,setCount}}>
            {children}
        </CountContext.Provider>
    )
}

const useCount = () => useContext(CountContext) // consumer

export {CountProvider, useCount};