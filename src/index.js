import ReactDOM from 'react-dom'

import App from './App'
import { TickerProvider } from './hooks/context/useContextProvider.jsx'
import { SearchProvider } from './hooks/context/useSearchProvider.jsx'
import reportWebVitals from './reportWebVitals'
import './styles/index.scss'

ReactDOM.render(
  <SearchProvider>
    <TickerProvider>
      <App />
    </TickerProvider>
  </SearchProvider>,
  document.getElementById('root')
)

reportWebVitals()
