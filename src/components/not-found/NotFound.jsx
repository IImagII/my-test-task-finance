import styles from './NotFound.module.scss'

const NotFoundInfo = () => {
  return (
    <h1 className={styles.root}>
      <span>😕</span>
      <br />
      Ничего не найдено:(
    </h1>
  )
}
export default NotFoundInfo
