import styled from 'styled-components'

import BackgroundImage from '../../assets/background-Codeburger.png'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${BackgroundImage}');
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginImage = styled.img`
  height: 80%;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 80%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    text-align: center;
    color: #ffffff;
    margin-top: 50px;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 28px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  height: 38px;
  width: 391px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border: ${(props) => (props.error ? '2px solid #cc1717' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  font-size: 15px;
  color: #ffffff;
  font-weight: 300;
  font-style: normal;

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const ErrorMessage = styled.p`
  font-weight: normal;
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  margin-top: 2px;
  color: #cc1717;
`
