import { useContext } from 'react'

import { TickerContext } from '../../hooks/context/useContextProvider.jsx'
import List from '../List.jsx'

import styles from './Header.module.scss'

const Header = () => {
  const { ticker } = useContext(TickerContext)

  return (
    <header className={styles.header}>
      {ticker.map((item, index) => (
        <List {...item} key={index} />
      ))}
    </header>
  )
}

export default Header
