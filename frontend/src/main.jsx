import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Check_auth from './components/check_auth.jsx'
import Tickets from './pages/tickets.jsx'
import SignupPage from './pages/signup.jsx'
import LoginPage from './pages/login.jsx'
import AdminPanel from './pages/admin.jsx'
import TicketDetailsPage from './pages/ticket.jsx'


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
                <TicketDetailsPage/>
            </Check_auth>
          }
        />

        <Route
          path='/login'
          element={
            <Check_auth protected={false}>
                <LoginPage/>
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
                <AdminPanel/>
            </Check_auth>
          }
        />



      </Routes>

      
        
     
      
    </BrowserRouter>
  </StrictMode>,
)
