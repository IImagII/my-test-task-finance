import ReactDOM from 'react-dom'

import App from './App'
import { TickerProvider } from './hooks/useContextProvider.jsx'
import './styles/index.scss'

ReactDOM.render(
  <TickerProvider>
    <App />
  </TickerProvider>,
  document.getElementById('root')
)
