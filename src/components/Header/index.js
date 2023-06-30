import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Cart from '../../assets/cart.png'
import Person from '../../assets/person.png'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  ContainerText,
  Line
} from './styles'

export function Header() {
  const { pathname } = useLocation()
  const isHomeActive = pathname === '/'
  const isProductOn = pathname.includes('produtos')

  const { logout } = useUser()

  const logoutUser = () => {
    logout()
  }

  return (
    <Container>
      <ContainerLeft>
        <Link
          to="/"
          style={{
            fontSize: 16,
            textDecoration: 'none',
            fontWeight: `${isHomeActive ? 'bold' : 'normal'}`,
            lineHeight: 19,
            color: `${isHomeActive ? '#9758a6' : '#555555'}`,
            cursor: 'pointer'
          }}
        >
          Home
        </Link>
        <Link
          to="/produtos"
          style={{
            fontSize: 16,
            textDecoration: 'none',
            fontWeight: `${isProductOn ? 'bold' : 'normal'}`,
            lineHeight: 19,
            color: `${isProductOn ? '#9758a6' : '#555555'}`,
            cursor: 'pointer'
          }}
        >
          Ver produtos
        </Link>
      </ContainerLeft>

      <ContainerRight>
        <Link to="/carrinho">
          <img src={Cart} alt="imagem de carrinho" />
        </Link>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="ícone de usuário" />{' '}
        </PageLink>
        <ContainerText>
          <Link
            to="/login"
            onClick={logoutUser}
            style={{
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: 14,
              lineHeight: 16,
              display: 'flex',
              alignItems: 'center',
              color: '#9758ab',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            <p style={{ padding: 5 }}> Olá, Eduardo </p> Sair
          </Link>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
