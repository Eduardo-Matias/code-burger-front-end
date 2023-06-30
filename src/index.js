import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import { router } from './routes/routes'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
    <ToastContainer autoClose={2000} />
    <GlobalStyles />
  </>
)
