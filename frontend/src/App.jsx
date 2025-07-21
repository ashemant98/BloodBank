import { Routes ,Route } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import {ToastContainer} from 'react-toastify'

function App() {
  

  return (
   <>

    <ToastContainer></ToastContainer>
    <Routes>

        <Route path="/" element={<Home></Home>}></Route>
     
        <Route path="/dashboard" element={
          <Dashboard></Dashboard>}></Route>
        


    </Routes>
    </>
  )
}

export default App
