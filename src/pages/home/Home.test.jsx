import { render } from '@testing-library/react'

import Home from './Home.jsx'

describe('Home', () => {
  it('renders the Header component', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('header')).toBeInTheDocument()
  })

  it('renders the SearchTicker component', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('search-ticker')).toBeInTheDocument()
  })

  it('renders the Items component', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('items')).toBeInTheDocument()
  })
})
