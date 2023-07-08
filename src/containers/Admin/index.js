import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin() {
  const { pathname: locationPathname } = useLocation()

  return (
    <Container>
      <SideMenuAdmin path={locationPathname} />
      <ContainerItems>
        {locationPathname === paths.Order && <Orders />}
        {locationPathname === paths.Product && <ListProducts />}
        {locationPathname === paths.NewProduct && <NewProduct />}
        {locationPathname === paths.EditProduct && <EditProduct />}
      </ContainerItems>
    </Container>
  )
}
