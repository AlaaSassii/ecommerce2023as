import { useAppDispatch } from "./hooks/useAppDispatch"
import { useAppSelector } from "./hooks/useAppSelector"
import useGetAllProducts from "./hooks/useGetAllProducts"
import useGetSingleProduct from './hooks/useGetSingleProduct'
const App = () => {
  const { error, loading, products } = useGetAllProducts()
  const dispatch = useAppDispatch();
  const { userCartProduct } = useAppSelector(state => state.userCart)
  return (

    <div>
      <h1>Products fetch</h1>
      {
        products?.map(product => <h1>{product.title}</h1>)
      }
      <hr />
      <h1>Products User get</h1>
      {
        userCartProduct.map(product => <h1>{product.title}</h1>)
      }
    </div>
  )
}

export default App