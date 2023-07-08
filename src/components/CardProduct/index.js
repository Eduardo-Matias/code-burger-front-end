import React from 'react'

import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'
// import { Button } from '../Button'
import { Container, Image, ProductName, ProductPrice, Button } from './styles'

export function CardProduct({ product }) {
  const { putProductInCart } = useCart()

  return (
    <Container>
      <Image src={product.url} alt="Imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button to="/carrinho" onClick={() => putProductInCart(product)}>
          Adicionar
        </Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
