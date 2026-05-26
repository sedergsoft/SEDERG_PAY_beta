// src/pages/auth/LoginPage.tsx

import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { login } from '../../store/authSlice'
import { AppDispatch, RootState } from '../../store/store'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import Card from '../../components/common/Card'
import { Mail, Lock } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { loading, error } = useSelector((state: RootState) => state.auth)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await dispatch(login(data)).unwrap()
      if (result) {
        navigate('/dashboard')
      }
    } catch (err: any) {
      setServerError(err || 'Error en el login')
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <Card shadow='lg' padding='lg' className='animate-slide-in'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>Sederg Pay</h1>
            <p className='text-gray-600'>Inicia sesión en tu cuenta</p>
          </div>

          {serverError || error ? (
            <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6'>
              {serverError || error}
            </div>
          ) : null}

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <Input
              label='Email'
              type='email'
              placeholder='tu@email.com'
              icon={<Mail size={18} />}
              error={errors.email?.message}
              {...register('email')}
            />

            <Input
              label='Contraseña'
              type='password'
              placeholder='••••••••'
              icon={<Lock size={18} />}
              error={errors.password?.message}
              {...register('password')}
            />

            <Button type='submit' fullWidth size='lg' isLoading={loading}>
              Iniciar Sesión
            </Button>
          </form>

          <div className='mt-6 text-center'>
            <p className='text-gray-600'>
              ¿No tienes cuenta?{' '}
              <Link to='/auth/register' className='text-primary-700 font-semibold hover:underline'>
                Regístrate aquí
              </Link>
            </p>
          </div>

          <div className='mt-6 pt-6 border-t border-gray-200'>
            <Link
              to='#'
              className='text-center block text-sm text-primary-700 hover:underline'
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </Card>

        <p className='text-center text-white text-sm mt-6'>
          © 2026 Sederg Soft. Todos los derechos reservados.
        </p>
      </div>
    </div>
  )
}