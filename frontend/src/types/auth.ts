// src/types/auth.ts

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  nombre: string
  dni: string
  email: string
  telefono: string
  pais: string
  password: string
}

export interface AuthResponse {
  token: string
  user: User
}

export interface User {
  id: number
  nombre: string
  dni: string
  email: string
  telefono: string
  pais: string
  estado_kyc: 'pendiente' | 'aprobado' | 'rechazado'
  created_at: string
  updated_at: string
}

export interface AuthState {
  user: User | null
  token: string | null
  loading: boolean
  error: string | null
}