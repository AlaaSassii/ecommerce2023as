import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/page' element={<h1>page</h1>} />
        <Route path='/page1' element={<h1>page1</h1>} />
        <Route path='/page2' element={<h1>page2</h1>} />
      </Routes>
    </>
  )
}

export default App