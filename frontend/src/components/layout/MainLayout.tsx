// src/components/layout/MainLayout.tsx

import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/authSlice'
import { RootState, AppDispatch } from '../../store/store'
import { Menu, X, LogOut, User, Home, Send, Settings } from 'lucide-react'
import Button from '../common/Button'

export default function MainLayout() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { user } = useSelector((state: RootState) => state.auth)
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/auth/login')
  }

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Send, label: 'Remesas', href: '/remesa' },
    { icon: User, label: 'Perfil', href: '/profile' },
    { icon: Settings, label: 'Configuración', href: '/settings' },
  ]

  return (
    <div className='flex h-screen bg-gray-50'>
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-50 w-64 bg-primary-700 text-white transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <div className='flex items-center justify-between p-4 lg:justify-between'>
          <h1 className='text-xl font-bold'>Sederg Pay</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className='lg:hidden hover:bg-primary-600 p-2 rounded'
          >
            <X size={20} />
          </button>
        </div>

        <nav className='mt-8 space-y-2 px-4'>
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                navigate(item.href)
                setSidebarOpen(false)
              }}
              className='flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors'
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className='absolute bottom-0 left-0 right-0 p-4 border-t border-primary-600'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center'>
              <User size={20} />
            </div>
            <div>
              <p className='font-semibold text-sm'>{user?.nombre}</p>
              <p className='text-xs text-primary-200'>{user?.email}</p>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant='ghost'
            size='sm'
            fullWidth
            icon={<LogOut size={16} />}
            className='text-white hover:bg-primary-600'
          >
            Salir
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className='flex-1 flex flex-col'>
        {/* Header */}
        <header className='bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between'>
          <button
            onClick={() => setSidebarOpen(true)}
            className='lg:hidden hover:bg-gray-100 p-2 rounded'
          >
            <Menu size={20} />
          </button>
          <div className='flex-1' />
          <div className='text-right'>
            <p className='text-sm font-semibold text-gray-900'>{user?.nombre}</p>
            <p className='text-xs text-gray-500'>{user?.estado_kyc}</p>
          </div>
        </header>

        {/* Page Content */}
        <main className='flex-1 overflow-auto p-4 md:p-8'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}