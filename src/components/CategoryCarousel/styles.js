import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const CategoryImg = styled.img`
  margin-top: 10px;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 260px;
  border-radius: 10px;
`

export const Button = styled(Link)`
  margin-top: 15px;
  background: #9758a6;
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(121, 88, 161, 0.22),
    0 20px 40px rgba(151, 88, 166, 0.24);
  height: 50px;
  border: none;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  font-style: normal;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`
