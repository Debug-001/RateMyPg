import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import TC from './pages/TC';
import Privacy from './pages/Privacy';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App () {
  return (
    <>
   <Router>
   <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/explore' element={<Explore/>} />
       <Route path='/tc' element={<TC/>} />
       <Route path='/privacy' element={<Privacy/>} />
   </Routes>
   </Router>
   </>
  )
}

export default App