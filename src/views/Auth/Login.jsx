import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

//Styled-Components
import {
  Form,
  DivCol,
  DivRow,
  FormInput,
  SecTitle,
  Link,
} from '../../styledComponents/styles'

const Login = () => {
  const [phone, setPhone] = useState('')
  const [data, setData] = useState([])

  let history = useHistory()

  const handleUsers = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://localhost:3000/users',
      })
      setData(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getPhone = (e) => {
    setPhone(e.target.value)
  }

  useEffect(() => {
    handleUsers()
  }, [])

  const auth = () => {
    data.map((user) => {
      if (+user.cel === +phone) {
        history.push('/client')
      } else {
        return
      }
    })
  }

  return (
    <DivCol>
      <Form>
        <SecTitle>Login</SecTitle>
        <DivRow>
          <label htmlFor="sign-in-button">Ingresa tu teléfono</label>
          <FormInput
            type="tel"
            id="sign-in-button"
            value={phone}
            onChange={getPhone}
          />
        </DivRow>

        <Link onClick={auth} type="submit">
          Enviar
        </Link>
      </Form>
    </DivCol>
  )
}

export default Login
