import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  display: flex;
  gap: 12px;
  padding: 16px;
  width: max-content;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Image = styled.img`
  width: 150px;
  border-radius: 10px;
`

export const ProductName = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  color: #000000;
  line-height: 19px;
`

export const ProductPrice = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  color: #000000;
  line-height: 21px;
  margin-top: 30px;
`

export const Button = styled(Link)`
  width: 182px;
  height: 38px;
  background: #9758a6;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  text-align: center;
  line-height: 19px;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
