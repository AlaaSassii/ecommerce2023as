import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Products from './routes/Products'
import ProductsInfo from './routes/ProductsInfo'
import UserCart from './routes/UserCart'
import Contact from './routes/Contact'
import Error from './routes/Error'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductsSidebar from './components/ProductsSidebar'
import { useSideBar } from './hooks/useSidebar'
import { sidebarUserProductsEnum } from './enum/sidebarUserProducts'
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
        <Route path='*' element={<Error />} />
      </Routes>
      <ProductsSidebar />
      <Footer />
    </>
  )
}

export default App