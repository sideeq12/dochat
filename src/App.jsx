import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import UploadPage from './pages/UploadPage'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
