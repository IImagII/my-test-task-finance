import { useState } from 'react'

import Input from '../ui/input/Input.jsx'

import styles from './SearchTicker.module.scss'

const SearchTicker = () => {
  const [search, setSearch] = useState('')
  console.log('🚀 ~ search:', search)

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Input
          name="text"
          placeholder="enter ticker"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SearchTicker
