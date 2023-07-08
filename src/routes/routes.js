import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import paths from '../constants/paths'
import { Login, Register } from '../containers'
import {
  ProviteHome,
  ProviteProducts,
  ProviteCart,
  ProviteAdminPage,
  ProviteListProducts,
  ProviteNewProductPage,
  ProviteEditProductPage
} from './private-routes'

export const router = createBrowserRouter([
  {
    path: '/produtos',
    element: <ProviteProducts />
  },
  {
    path: paths.EditProduct,
    element: <ProviteEditProductPage />
  },
  {
    path: paths.NewProduct,
    element: <ProviteNewProductPage />
  },
  {
    path: paths.Product,
    element: <ProviteListProducts />
  },
  {
    path: paths.Order,
    element: <ProviteAdminPage />
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
