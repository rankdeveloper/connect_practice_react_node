import React from 'react'
import axios from 'axios'
import {BrowserRouter , Routes , Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'

export default function App() {

return(
  <>

<BrowserRouter>
<Link to={'/'}>Home</Link>
<Link to={'/about'}>About</Link>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
  </Routes>
</BrowserRouter>
  </>
)
}
