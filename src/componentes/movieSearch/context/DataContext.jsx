import { createContext, useState } from "react";
import { useFecth } from "../hooks/useFectch";

export const DataContext = createContext()

export const Provider = ({children}) => {

  const [query, setQuery] = useState('superman')
  const {isLoading, error, data } = useFecth(`&s=${query}`)

  return (

    <DataContext.Provider value={{
        setQuery,
        isLoading,
        error,
        data
    }}>
      {children}
    </DataContext.Provider>
  )
}