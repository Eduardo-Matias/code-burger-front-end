import React from 'react'

import { ErrorMessageStyled } from './styles'

export function ErrorMessage({ children }) {
  return <ErrorMessageStyled> {children} </ErrorMessageStyled>
}
