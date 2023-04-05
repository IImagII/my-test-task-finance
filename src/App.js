import { useContext, useEffect } from 'react'
import { io } from 'socket.io-client'

import { TickerContext } from './hooks/context/useContextProvider.jsx'
import Home from './pages/home/Home.jsx'
import { paths } from './utils/paths'

function App() {
  const { setTicker } = useContext(TickerContext)

  useEffect(() => {
    const socket = io(paths.url)
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
