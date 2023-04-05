import { Route, Routes } from 'react-router'

import Layout from './components/layout/Layout.jsx'
import NotFoundInfo from './components/not-found/NotFound.jsx'
import Home from './pages/home/Home.jsx'
import ListOne from './pages/list-one/ListOne.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<ListOne />} />
        <Route path="*" element={<NotFoundInfo />} />
      </Route>
    </Routes>
  )
}

export default App
