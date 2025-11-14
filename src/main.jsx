import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { measurePerformance } from './utils/performance.js'

// Measure performance in development
if (import.meta.env.DEV) {
  measurePerformance();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
