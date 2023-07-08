import styled from 'styled-components'

import { Button } from '../../../components/Button'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

export const Label = styled.p`
  font-size: 15px;
  color: #ffffff;
  margin-bottom: 3px;
`

export const Input = styled.input`
  height: 35px;
  border-radius: 8px;
  border: none;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  width: 100%;
  min-width: 200px;
  padding-left: 8px;
  font-size: 12px;
`

export const ButtonStyled = styled(Button)`
  width: 100%;
  margin-top: 20px;
`

export const LabelInput = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #ffffff;
  border-radius: 5px;
  padding: 10px;
  gap: 7px;

  input {
    width: 1px;
    opacity: 0;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`
