import React from 'react'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../src/pages/Home.css'


function App () {
  return (
    <>
   <Router>
   <Routes>
       <Route path='/' element={<Home/>} />
   </Routes>
   </Router>
   </>
  )
}

export default App