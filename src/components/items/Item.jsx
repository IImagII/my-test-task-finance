import { useNumberDisplay } from '../../hooks/number-display/useNumberDisplay.jsx'
import { changeData } from '../../utils/changeData'

import styles from './Items.module.scss'

const Item = ({ ...item }) => {
  const {
    ticker,
    exchange,
    price,
    change,
    change_percent: percent,
    dividend,
    yield: decideYield,
    last_trade_time
  } = item

  const priceDisplay = useNumberDisplay({ number: price })
  const changeDisplay = useNumberDisplay({ number: change })
  const percentDisplay = useNumberDisplay({ number: percent })
  const dividendDisplay = useNumberDisplay({ number: dividend })
  const yieldDisplay = useNumberDisplay({ number: decideYield })

  return (
    <>
      <td>{ticker}</td>
      <td>{exchange}</td>
      <td className={styles.view}>{priceDisplay} $</td>
      <td className={styles.view}>{changeDisplay} $</td>
      <td className={styles.view}>{percentDisplay} %</td>
      <td>{dividendDisplay}</td>
      <td>{yieldDisplay}</td>
      <td>{changeData(new Date(last_trade_time))}</td>
    </>
  )
}

export default Item
