import styles from './header/Header.module.scss'

const List = ({ ...item }) => {
  const { ticker, price, change_percent: percent } = item
  return (
    <div className={styles.cell}>
      <div className={styles.name}>{ticker}</div>
      <div className={styles.price}> ${price}</div>
      <div className={styles.change}>{percent} %</div>
    </div>
  )
}

export default List
