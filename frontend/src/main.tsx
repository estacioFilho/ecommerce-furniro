import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import Home from './pages/Home.tsx'
import Shop from './pages/Shop.tsx'
import Header from './components/Header.tsx'
import PageNotFound from './PageNotFound.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route index path='shop' element={<Shop />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
)
