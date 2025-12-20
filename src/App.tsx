import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import Product from './feature/Events/Product'
function App() {
  
   return (
    <BrowserRouter>
      <Routes>
        {/* หน้าแรก */}
        <Route path="/" element={<Home />} />

        {/* หน้า Sign In (เข้าเมื่อกดเท่านั้น) */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
