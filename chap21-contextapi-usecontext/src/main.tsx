import {BrowserRouter as Router, Route} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Route path='/' component={App}/>
    </Router>
  </React.StrictMode>,
)
