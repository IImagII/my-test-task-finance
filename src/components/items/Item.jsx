import { changeData } from '../../utils/changeData'

import styles from './Items.module.scss'

const Item = ({ ...item }) => {
  const {
    ticker,
    exchange,
    price,
    change,
    change_percent,
    dividend,
    yield: decideYield,
    last_trade_time
  } = item
  return (
    <>
      <td>{ticker}</td>
      <td>{exchange}</td>
      <td className={styles.price_green}>
        <span>{price}</span>
      </td>
      <td>{change}</td>
      <td>{change_percent}</td>
      <td>{dividend}</td>
      <td>{decideYield}</td>
      <td>{changeData(new Date(last_trade_time))}</td>
    </>
  )
}

export default Item
