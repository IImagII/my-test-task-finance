import Moment from 'react-moment'

import styles from './ListNews.module.scss'

const List = ({ ...item }) => {
  const { imageUrl, title, updatedAt, url, newsSite, summary } = item


  return (
    <div>
      <div className={styles.blog_card}>
        <div className={styles.meta}>
          <div className={styles.photo}>
            <img src={imageUrl} alt={title} />
          </div>
          <ul className={styles.details}>
            <li className={styles.author}>
              <a href={url}>{newsSite}</a>
            </li>
            <li className={styles.date}>
              <Moment date={updatedAt} format="DD MMM YYYY" />
            </li>
          </ul>
        </div>
        <div className={styles.description}>
          <h1>{title}</h1>
          <h2>{newsSite}</h2>
          <p>{summary.substring(0, 200) + '...'}</p>
          <p className={styles.read_more}>
            <a href={url}>Read More</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default List
