import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import api from '../../../services/api'
import {
  Container,
  Label,
  Input,
  ButtonStyled,
  LabelInput,
  ContainerInput
} from './styles'

function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([null])
  const history = useNavigate()
  const { state } = useLocation()

  const schema = Yup.object().shape({
    name: Yup.string().required('Coloque o nome do produto'),
    price: Yup.string().required('Coloque o preço do produto'),
    category: Yup.object().required('Escolha a categoria do produto'),
    offer: Yup.bool()
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async (data) => {
    const productFormData = new FormData()

    productFormData.append('name', data.name)
    productFormData.append('price', data.price)
    productFormData.append('category_id', data.category.id)
    productFormData.append('file', data.file[0])
    productFormData.append('offer', data.offer)

    await toast.promise(api.put(`products/${state.id}`, productFormData), {
      pending: 'Editando o produto...',
      success: 'Produto editado!',
      error: 'falha ao editar produto'
    })

    setTimeout(() => {
      history('/listar-produtos')
    }, 2000)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label> Nome </Label>
          <Input
            placeholder="Digite o nome do produto"
            type="text"
            {...register('name')}
            defaultValue={state.name}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label> Preço </Label>
          <Input
            placeholder="Digite o preço do produto"
            type="number"
            {...register('price')}
            defaultValue={state.price}
          />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
          <LabelInput>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregue a imagem do produto
              </>
            )}

            <input
              type="file"
              accept="image/png, image/jpeg"
              {...register('file')}
              onChange={(value) => setFileName(value.target.files[0]?.name)}
            />
          </LabelInput>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <div>
          <Controller
            name="category"
            control={control}
            defaultValue={state.category}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id}
                  placeholder="Selecione a categoria do produto"
                  defaultValue={state.category}
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ContainerInput>
          <input
            type="checkbox"
            defaultChecked={state.offer}
            {...register('offer')}
          />
          <Label> Produto em oferta? </Label>
        </ContainerInput>

        <ButtonStyled> Editar </ButtonStyled>
      </form>
    </Container>
  )
}

export default EditProduct
