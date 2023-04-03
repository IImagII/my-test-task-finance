import Items from '../../components/items/Items.jsx'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Вас може зацікавить</div>
        <Items />
      </div>
    </div>
  )
}

export default Home
