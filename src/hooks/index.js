import React from 'react'

import PropTypes from 'prop-types'

import { CartProvider } from './CartContext'
import { UserProvider } from './UserContext'

const AppProvider = ({ children }) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
)

export default AppProvider

AppProvider.propTypes = {
  children: PropTypes.node
}
