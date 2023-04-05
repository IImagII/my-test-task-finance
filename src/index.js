import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import { TickerProvider } from './hooks/context/useContextProvider.jsx'
import { SearchProvider } from './hooks/context/useSearchProvider.jsx'
import reportWebVitals from './reportWebVitals'
import { store } from './store/store'
import './styles/index.scss'

ReactDOM.render(
  <Provider store={store}>
    <SearchProvider>
      <TickerProvider>
        <App />
      </TickerProvider>
    </SearchProvider>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
