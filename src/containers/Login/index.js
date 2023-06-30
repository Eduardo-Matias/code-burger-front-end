import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-image.png'
import Logo from '../../assets/logo.png'
import { Button } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMessage
} from './styles'

export function Login() {
  const history = useNavigate()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido, por favor')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 digitos.')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados...',
        success: 'Bem vindo(a) novamente',
        error: 'Ops! Verifique seu e-mail e senha'
      }
    )

    putUserData(data)

    setTimeout(() => {
      history('/')
    }, 1000)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-img" />
      <ContainerItens>
        <img src={Logo} alt="logo" />
        <h1> Login </h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label> Email </Label>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage> {errors.email?.message} </ErrorMessage>

          <Label> Senha </Label>
          <Input
            type="password"
            placeholder="Digite sua senha"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage> {errors.password?.message} </ErrorMessage>

          <Button type="submit" style={{ marginTop: 50, marginBottom: 20 }}>
            Sign In
          </Button>
        </form>
        <SignInLink>
          Não possui conta?{' '}
          <Link style={{ color: 'white' }} to={'/cadastro'}>
            {' '}
            Sign up
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
