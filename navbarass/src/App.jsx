import Abouts from './pages/Abouts'
import Homes from './pages/Homes'
import Products from './pages/Products'
import Servicess from './pages/Servicess'
import Registers from './pages/Registers'
import Logins from './pages/Logins'
// import './App.css'
import './product.css'


import { Routes, Route} from 'react-router-dom'
import Navbar  from './component/includes/Navbar'


function App() {


  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={ <Homes /> } />
        <Route path="/abouts" element={ <Abouts /> } />
        <Route path="/Products" element={ <Products /> } />
       <Route path="/services" element={ < Servicess />} />
       <Route path="/registers" element={ < Registers/>} />
       <Route path="/logins" element={< Logins/>} />

      </Routes>
    </>
  )
}

export default App
