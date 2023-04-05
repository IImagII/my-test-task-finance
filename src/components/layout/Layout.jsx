import Header from '../../components/header/Header.jsx'
import Items from '../../components/items/Items.jsx'
import SearchTicker from '../../components/search-ticker/SearchTicker.jsx'

const Layout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header />
          <SearchTicker />
          <Items />
        </div>
      </div>
      <main>{children}</main>
    </>
  )
}

export default Layout
