import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/index.jsx'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;