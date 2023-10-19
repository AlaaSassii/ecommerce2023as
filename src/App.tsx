import { useAppDispatch } from "./hooks/useAppDispatch"
import { useAppSelector } from "./hooks/useAppSelector"
import useGetAllProducts from "./hooks/useGetAllProducts"
import { changeSearchProductName } from "./redux/ProductsSlice"
import { getNewProduct, removeProduct, incrementProductAmount, decrementProductAmount } from "./redux/cartSlice"
import Tooltip from "./components/Tooltip"
const App = () => {
  const { error, loading, products, searchProductName } = useGetAllProducts()
  const dispatch = useAppDispatch();
  const { userCartProduct } = useAppSelector(state => state.userCart)
  return (

    <div>
      search
      <div className="tooltip_element">
        <h1>Products fetch</h1>
        <Tooltip message={`fetch`} position="bottom" />
      </div>
      <input type="text" onChange={e => dispatch(changeSearchProductName(e.target.value))} value={searchProductName} />
      {
        products
          ?.filter(product => product.title.toLocaleLowerCase().includes(searchProductName.toLocaleLowerCase()))
          ?.map(product => <div className="tooltip__element">
            <div className="tooltip_element">
              <p>{product.title}</p>
              <Tooltip message={`route to ${product.id}`} position="bottom" />
            </div>
          </div>)
      }
      <hr />
      <h1>Products User get</h1>
      {
        userCartProduct.map(product => <div >
          <h6 onClick={() => dispatch(removeProduct(product.id))}> {product.title}</h6>
          <button onClick={() => dispatch(incrementProductAmount(product.id))}>+</button>
          <b>{product.amount}</b>
          <button onClick={() => dispatch(decrementProductAmount(product.id))}>-</button>

        </div>)
      }
    </div>
  )
}

export default App