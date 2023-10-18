import useGetAllProducts from "./hooks/useGetAllProducts"
import useGetSingleProduct from './hooks/useGetSingleProduct'
const App = () => {
  // const { error, loading, products } = useGetProducts()
  const { error, loading, products } = useGetAllProducts()

  console.log({ error, loading, products })
  return (

    <div>App</div>
  )
}

export default App