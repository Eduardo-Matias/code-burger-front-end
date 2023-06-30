import React from 'react'
import { Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../components'
import { Home, Product, Cart } from '../containers'

export function ProviteHome() {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Header />
      <Home />
    </>
  )
}

ProviteHome.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}

export function ProviteProducts() {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Header />
      <Product />
    </>
  )
}

ProviteProducts.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}

export function ProviteCart() {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Header />
      <Cart />
    </>
  )
}

ProviteCart.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
