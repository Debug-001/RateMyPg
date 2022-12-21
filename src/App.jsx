import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../src/pages/pages.css'


function App () {
  return (
    <>
   <Router>
   <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/explore' element={<Explore/>} />
   </Routes>
   </Router>
   </>
  )
}

export default App