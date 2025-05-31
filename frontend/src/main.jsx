import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Check_auth from './components/check_auth.jsx'
import Login from './pages/login.jsx'
import Tickets from './pages/tickets.jsx'
import TicketDetailPage from './pages/ticket.jsx'
import Admin from './pages/admin.jsx'
import SignupPage from './pages/signup.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Check_auth protected={true}>
                <Tickets/>
            </Check_auth>
          }
        />

          <Route
          path='/tickets/:id'
          element={
            <Check_auth protected={true}>
                <TicketDetailPage/>
            </Check_auth>
          }
        />

        <Route
          path='/login'
          element={
            <Check_auth protected={false}>
                <Login/>
            </Check_auth>
          }
        />

        <Route
          path='/signup'
          element={
            <Check_auth protected={false}>
                <SignupPage/>
            </Check_auth>
          }
        />

        <Route
          path='/admin'
          element={
            <Check_auth protected={true}>
                <Admin/>
            </Check_auth>
          }
        />



      </Routes>

      
        
     
      
    </BrowserRouter>
  </StrictMode>,
)
