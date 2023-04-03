import { useContext } from 'react'

import { TickerContext } from '../../hooks/useContextProvider.jsx'

import Item from './Item.jsx'
import styles from './Items.module.scss'

const Items = () => {
  const { ticker } = useContext(TickerContext)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Ticker <span className={styles.handle}></span>
            </th>
            <th>
              Exchange <span className={styles.handle}></span>
            </th>
            <th>
              Price <span className={styles.handle}></span>
            </th>
            <th>
              Change <span className={styles.handle}></span>
            </th>
            <th>
              change_percent <span className={styles.handle}></span>
            </th>
            <th>
              dividend <span className={styles.handle}></span>
            </th>
            <th>
              yield <span className={styles.handle}></span>
            </th>
            <th>
              last_trade_time <span className={styles.handle}></span>
            </th>
          </tr>
        </thead>
        <tbody>
          {ticker.map((item, index) => (
            <tr key={index}>
              <Item {...item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Items
