import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Logo from '../../assets/logo.png'
import RegisterImg from '../../assets/register-image.png'
import { Button } from '../../components'
import api from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMessage
} from './styles'

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('A informação de nome é obrigatória'),
    email: Yup.string()
      .email('Digite um e-mail válido, por favor')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 digitos'),
    confirmPassword: Yup.string()
      .required('A confirmação de senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        })
      } else if (status === 409) {
        toast.error('Usuário já cadastrado!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        })
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="register-img" />
      <ContainerItens>
        <img src={Logo} alt="logo" />
        <h1> Cadastre-se </h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}> Nome </Label>
          <Input
            type="text"
            placeholder="Digite seu nome"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage> {errors.name?.message} </ErrorMessage>

          <Label error={errors.email?.message}> Email </Label>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage> {errors.email?.message} </ErrorMessage>

          <Label error={errors.password?.message}> Senha </Label>
          <Input
            type="password"
            placeholder="Digite sua senha"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage> {errors.password?.message} </ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar senha</Label>
          <Input
            type="password"
            placeholder="Confirme sua senha"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage> {errors.confirmPassword?.message} </ErrorMessage>

          <Button type="submit" style={{ marginTop: 20, marginBottom: 10 }}>
            Sign Up
          </Button>
        </form>
        <SignInLink>
          Já possui conta?{' '}
          <Link style={{ color: 'white' }} to={'/login'}>
            {' '}
            Sign in
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
