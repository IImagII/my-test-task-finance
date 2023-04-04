import Header from '../../components/header/Header.jsx'
import Items from '../../components/items/Items.jsx'
import SearchTicker from '../../components/search-ticker/SearchTicker.jsx'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <SearchTicker />
        <Items />
      </div>
    </div>
  )
}

export default Home
