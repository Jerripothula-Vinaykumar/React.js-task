
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import LandingPage from './LandingPage'
import Register from './Register'
import SignUp from './SignUp'
import Home from './Home'
function App() {
  

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<LandingPage/>}>

        </Route>
         <Route path="/Register" element={<Register/>}>

        </Route>
         <Route path="/SignUp" element={<SignUp/>}>

        </Route>
         <Route path="/Home" element={<Home/>}>

        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
