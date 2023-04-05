import { act, render } from '@testing-library/react'
import { io } from 'socket.io-client'

import App from './App'
import { TickerContext } from './hooks/context/useContextProvider.jsx'

jest.mock('socket.io-client')

describe('App', () => {
  const ticker = { symbol: 'AAPL', price: 132.04 }
  let setTicker = jest.fn()

  beforeEach(() => {
    setTicker = jest.fn()
    io.mockImplementation(() => {
      return {
        on: (event, callback) => {
          if (event === 'ticker') {
            callback(ticker)
          }
        },
        emit: () => {},
        disconnect: () => {}
      }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the Home component', () => {
    const { getByText } = render(
      <TickerContext.Provider value={{ setTicker }}>
        <App />
      </TickerContext.Provider>
    )
    expect(getByText('Welcome to the Ticker App')).toBeInTheDocument()
  })

  it('updates the ticker context with the latest ticker data', async () => {
    await act(async () => {
      render(
        <TickerContext.Provider value={{ setTicker }}>
          <App />
        </TickerContext.Provider>
      )
    })

    expect(setTicker).toHaveBeenCalledWith(ticker)
  })
})
