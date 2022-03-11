import React from 'react'
import {
  Link,
  DivCol,
  DivRow,
  Form,
  FormInput,
  SecTitle,
  NavLink,
} from '../../styledComponents/styles'

const Client = () => {
  return (
    <DivCol>
      <Form>
        <SecTitle>Ingresa tus datos</SecTitle>
        <DivRow>
          <label htmlFor="sign-in-button">Nombre</label>
          <FormInput type="text" id="sign-in-button" />
        </DivRow>
        <DivRow>
          <label htmlFor="sign-in-button">Edad</label>
          <FormInput type="text" id="sign-in-button" />
        </DivRow>
        <DivRow>
          <label htmlFor="sign-in-button">Teléfono</label>
          <FormInput type="tel" id="sign-in-button" />
        </DivRow>
        <DivRow>
          <label htmlFor="sign-in-button">Correo</label>
          <FormInput type="email" id="sign-in-button" />
        </DivRow>
        <Link href="/profile" type="submin">
          Enviar
        </Link>
      </Form>
    </DivCol>
  )
}

export default Client
