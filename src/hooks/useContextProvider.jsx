import { createContext, useState } from 'react'

export const TickerContext = createContext()

// eslint-disable-next-line react/prop-types
export const TickerProvider = ({ children }) => {
  const [ticker, setTicker] = useState([])

  return (
    <TickerContext.Provider value={{ ticker, setTicker }}>
      {children}
    </TickerContext.Provider>
  )
}
