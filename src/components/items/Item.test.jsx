import { render, screen } from '@testing-library/react'

import Item from './Item.jsx'

describe('Item component', () => {
  it('Item component', () => {
    render(<Item />)

    expect(screen.getByRole('table')).toBeInTheDocument()
  })
})
