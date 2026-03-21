import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/index.jsx'

//importacion de los AUTH
import Login from './auth/login.jsx'
import Registro from './auth/registro.jsx'

//import del Home
import Home from './pages/home/home.jsx';
import Noticias from './pages/noticias.jsx';

//const regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Navigate to="/" replace />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path='/registro' element={<Registro />} />

        {/* Home */}
        <Route path='/home' element={<Home />} />

        {/* Noticias */}
        <Route path='/noticias' element={<Noticias />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App;