import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import ExercisePage from './pages/ExercisePage';

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ display: "flex", height: "calc(100vh - 60px)" }}>
        <Sidebar isOpen={sidebarOpen} />
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            width: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            background: "white",
            borderRight: "1px solid #ddd",
            cursor: "pointer",
            fontSize: "18px"
          }}
        >
          {sidebarOpen ? "‹" : "›"}
        </button>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/exercise/:id" element={<ExercisePage />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
