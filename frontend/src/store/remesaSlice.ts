// src/store/remesaSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../services/api'
import { Remesa, CreateRemesaRequest, RemesaState } from '../types/remesa'

const initialState: RemesaState = {
  remesas: [],
  currentRemesa: null,
  loading: false,
  error: null,
  filters: {},
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
  },
}

export const fetchRemesas = createAsyncThunk(
  'remesa/fetchRemesas',
  async (
    params: { page?: number; estado?: string; ordenar?: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.get('/remesa', { params })
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Error al obtener remesas')
    }
  }
)

export const fetchRemesaDetail = createAsyncThunk(
  'remesa/fetchDetail',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await api.get(`/remesa/${id}`)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Error al obtener remesa')
    }
  }
)

export const createRemesa = createAsyncThunk(
  'remesa/create',
  async (data: CreateRemesaRequest, { rejectWithValue }) => {
    try {
      const response = await api.post<{ remesa: Remesa }>('/remesa/crear', data)
      return response.data.remesa
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Error al crear remesa')
    }
  }
)

const remesaSlice = createSlice({
  name: 'remesa',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    setFilters: (state, action) => {
      state.filters = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRemesas.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchRemesas.fulfilled, (state, action) => {
        state.loading = false
        state.remesas = action.payload.data
        state.pagination = action.payload.pagination
      })
      .addCase(fetchRemesas.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

    builder
      .addCase(fetchRemesaDetail.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchRemesaDetail.fulfilled, (state, action) => {
        state.loading = false
        state.currentRemesa = action.payload
      })
      .addCase(fetchRemesaDetail.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

    builder
      .addCase(createRemesa.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createRemesa.fulfilled, (state, action) => {
        state.loading = false
        state.remesas.unshift(action.payload)
      })
      .addCase(createRemesa.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { clearError, setFilters } = remesaSlice.actions
export default remesaSlice.reducer