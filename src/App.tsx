import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import ExercisePage from './pages/ExercisePage';

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <BrowserRouter>
      <div
        data-theme={theme}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "var(--bg-color)",
          color: "var(--text-color)"
        }}
      >
        <Navbar toggleTheme={toggleTheme} theme={theme} />

        <div style={{ display: "flex", flex: 1, minWidth: 0 }}>
          <Sidebar isOpen={sidebarOpen} />

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              width: "32px",
              border: "none",
              background: "var(--nav-bg)",
              borderRight: "1px solid var(--border-color)",
              color: "var(--text-color)"
            }}
          >
            {sidebarOpen ? "‹" : "›"}
          </button>

          <div style={{ flex: 1, minWidth: 0 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/exercise/:id" element={<ExercisePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
