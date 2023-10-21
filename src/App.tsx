import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Products from './routes/Products'
import ProductsInfo from './routes/ProductsInfo'
import UserCart from './routes/UserCart'
import Contact from './routes/Contact'
import Navbar from './components/Navbar'
import ProductsSidebar from './components/ProductsSidebar'
import { useSideBar } from './hooks/useSidebar'
import ErrorPage from './routes/ErrorPage'
const App = () => {
  const { showUserProductsSideBar, } = useSideBar()
  console.log({ showUserProductsSideBar });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductsInfo />} />
        <Route path='/user-product-cart' element={<UserCart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <ProductsSidebar />
    </>
  )
}

export default App