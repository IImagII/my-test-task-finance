import { useContext, useMemo } from 'react'

import { TickerContext } from '../../hooks/context/useContextProvider.jsx'
import { SearchContext } from '../../hooks/context/useSearchProvider.jsx'
import useDebounce from '../../hooks/useDebouce'

import Item from './Item.jsx'
import styles from './Items.module.scss'

const Items = () => {
  const { ticker } = useContext(TickerContext)

  const { searchValue } = useContext(SearchContext)

  const debouncedSearchTerm = useDebounce(searchValue, 700)

  const filterPosts = useMemo(() => {
    if (!debouncedSearchTerm) {
      return ticker
    }

    return ticker.filter((item) => {
      return item.ticker
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase())
    })
  }, [debouncedSearchTerm, ticker])

  const tickerValue = filterPosts.map((elem, index) => (
    <tr key={index}>
      <Item debouncedSearchTerm={debouncedSearchTerm} {...elem} />
    </tr>
  ))

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
              Percent <span className={styles.handle}></span>
            </th>
            <th>
              Dividend <span className={styles.handle}></span>
            </th>
            <th>
              Yield <span className={styles.handle}></span>
            </th>
            <th>
              Last trade<span className={styles.handle}></span>
            </th>
          </tr>
        </thead>
        <tbody>{tickerValue}</tbody>
      </table>
    </div>
  )
}

export default Items
