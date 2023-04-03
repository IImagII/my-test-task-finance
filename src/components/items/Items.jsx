import { useContext } from 'react'

import { TickerContext } from '../../hooks/useContextProvider.jsx'

import styles from './Items.module.scss'

const Items = () => {
  const { ticker } = useContext(TickerContext)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th data-type={styles.numeric}>
              Ticker <span className={styles.handle}></span>
            </th>
            <th data-type={styles.short}>
              Exchange <span className={styles.handle}></span>
            </th>
            <th data-type={styles.short}>
              Price <span className={styles.handle}></span>
            </th>
            <th data-type={styles.short}>
              Change <span className={styles.handle}></span>
            </th>
            <th data-type={styles.short}>
              change_percent <span className={styles.handle}></span>
            </th>
            <th data-type={styles.short}>
              dividend <span className={styles.handle}></span>
            </th>
            <th data-type={styles.short}>
              yield <span className={styles.handle}></span>
            </th>
            <th data-type={styles.short}>
              last_trade_time <span className={styles.handle}></span>
            </th>
          </tr>
        </thead>
        <tbody>
          {ticker.map((item, index) => (
            <tr key={index}>
              <td>{item.ticker}</td>
              <td>{item.exchange}</td>
              <td>{item.price}</td>
              <td>{item.change}</td>
              <td>{item.change_percent}</td>
              <td>{item.dividend}</td>
              <td>{item.yield}</td>
              <td>{item.last_trade_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Items
