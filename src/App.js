import { useEffect } from 'react'
import io from 'socket.io-client'

import './styles/app.scss'

function App() {
  useEffect(() => {
    const socket = io('http://localhost:4000')

    socket.emit('start')
    socket.on('ticker', (response) => {
      console.log(response)
    })
    return () => {
      socket.disconnect()
    }
  }, [])

  return <>dsf</>
}

export default App
