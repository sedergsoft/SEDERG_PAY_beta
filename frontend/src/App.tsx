// src/App.tsx

import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from './store/authSlice'
import { AppDispatch, RootState } from './store/store'
import MainLayout from './components/layout/MainLayout'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import CreateRemesaPage from './pages/remesa/CreateRemesaPage'

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { token } = useSelector((state: RootState) => state.auth)
  
  if (!token) {
    return <Navigate to='/auth/login' replace />
  }
  
  return <>{children}</>
}

// Auth Route Component
const AuthRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { token } = useSelector((state: RootState) => state.auth)
  
  if (token) {
    return <Navigate to='/dashboard' replace />
  }
  
  return <>{children}</>
}

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { token } = useSelector((state: RootState) => state.auth)

  // Restore user from token if exists
  useEffect(() => {
    const savedToken = localStorage.getItem('auth_token')
    if (savedToken && !token) {
      dispatch(fetchProfile())
    }
  }, [dispatch, token])

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route
          path='/auth/login'
          element={
            <AuthRoute>
              <LoginPage />
            </AuthRoute>
          }
        />
        <Route
          path='/auth/register'
          element={
            <AuthRoute>
              <RegisterPage />
            </AuthRoute>
          }
        />

        {/* Main App Routes */}
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='remesa/create' element={<CreateRemesaPage />} />
          {/* Add more routes here */}
          <Route index element={<Navigate to='/dashboard' replace />} />
        </Route>

        {/* 404 */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App