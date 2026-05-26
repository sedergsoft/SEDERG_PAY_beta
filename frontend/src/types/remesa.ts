// src/types/remesa.ts

export type RemesaStatus = 'pendiente' | 'depositada' | 'en_proceso' | 'cobrada' | 'rechazada'

export interface Remesa {
  id: number
  usuario_id: number
  destino_id: number
  destinatario_dni: string
  monto_rub: number
  monto_cup: number
  tasa_cambio: number
  estado: RemesaStatus
  codigo_cobro: string | null
  razon_rechazo: string | null
  created_at: string
  updated_at: string
}

export interface CreateRemesaRequest {
  destino_id: number
  destinatario_dni: string
  monto_rub: number
}

export interface RemesaResponse {
  id: number
  usuario_id: number
  destino_id: number
  destinatario_dni: string
  monto_rub: number
  monto_cup: number
  tasa_cambio: number
  estado: RemesaStatus
  codigo_cobro: string | null
  razon_rechazo: string | null
  created_at: string
  updated_at: string
}

export interface RemesaListResponse {
  data: Remesa[]
  pagination: {
    total: number
    page: number
    limit: number
    pages: number
  }
}

export interface RemesaState {
  remesas: Remesa[]
  currentRemesa: Remesa | null
  loading: boolean
  error: string | null
  filters: {
    estado?: RemesaStatus
    fecha_desde?: string
    fecha_hasta?: string
    ordenar?: 'fecha' | 'monto'
    orden?: 'asc' | 'desc'
  }
  pagination: {
    page: number
    limit: number
    total: number
  }
}