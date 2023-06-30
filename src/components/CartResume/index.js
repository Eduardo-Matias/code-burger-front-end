import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './styles'

export const CartResume = () => {
  const { cartProducts } = useCart()

  const [finalPrice, setFinalPrice] = useState(0)
  const [deleveryTax] = useState(5)

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cartProducts, deleveryTax])

  const submitOrder = async () => {
    const order = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'O seu pedido está sendo realizado...',
      success: 'Pedido realizado com sucesso!',
      error: 'Ops! Ocorreu um erro. Tente mais tarde'
    })
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title"> Resumo do pedido </h2>
          <p className="items"> Itens </p>
          <p className="items-price"> {formatCurrency(finalPrice)} </p>
          <p className="delevery-tax"> Taxa de entrega </p>
          <p className="delevery-tax-price"> {formatCurrency(deleveryTax)} </p>
        </div>
        <div className="container-bottom">
          <p> Total </p>
          <p> {formatCurrency(finalPrice + deleveryTax)} </p>
        </div>
      </Container>
      <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>
        Finalizar pedido
      </Button>
    </div>
  )
}
