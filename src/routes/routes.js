import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Login, Register } from '../containers'
import { ProviteHome, ProviteProducts, ProviteCart } from './private-routes'

export const router = createBrowserRouter([
  {
    path: '/produtos',
    element: <ProviteProducts />
  },
  {
    path: '/carrinho',
    element: <ProviteCart />
  },
  {
    path: '/',
    element: <ProviteHome />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <Register />
  }
])
