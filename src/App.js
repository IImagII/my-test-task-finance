import { useContext, useEffect } from 'react'
import { io } from 'socket.io-client'

import { TickerContext } from './hooks/useContextProvider.jsx'
import Home from './pages/home/Home.jsx'
import './styles/app.scss'

function App() {
  const { setTicker } = useContext(TickerContext)

  useEffect(() => {
    const socket = io('http://localhost:4000')

    socket.emit('start')
    socket.on('ticker', (response) => {
      setTicker(response)
    })
    return () => {
      socket.disconnect()
    }
  }, [setTicker])

  return (
    <>
      <Home />
    </>
  )
}

export default App
