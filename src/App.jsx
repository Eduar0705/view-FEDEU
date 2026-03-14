import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/index.jsx'

//importacion de los AUTH
import Login from './auth/login.jsx'

//import del Home
import Home from './pages/home/home.jsx';


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Navigate to="/" replace />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />

        {/* Home */}
        <Route path='/home' element={<Home />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App;