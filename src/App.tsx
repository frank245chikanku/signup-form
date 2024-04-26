
import './App.css'
import Register from './components/Register'
import Signup from './components/Signup'
import {Routes,Route} from "react-router-dom"

function App() {

  return (
    <Routes>
   <Route path="/" element={ <Signup/>}/>
   <Route path="/register" element={ <Register/>}/>
    </Routes>
  )
}

export default App
