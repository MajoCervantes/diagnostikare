import React, { useState, useEffect } from 'react'
import axios from 'axios'

//Styled-Components
import {
  Form,
  DivCol,
  DivRow,
  FormInput,
  Link,
  SecTitle,
} from '../../../styledComponents/styles'

const Appointment = () => {
  const [data, setData] = useState([])
  const [pain, setPain] = useState(true)
  const [fiver, setFiver] = useState(true)

  const handleUsers = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://localhost:3000/users/1',
      })
      setData(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handlePain = () => {
    setPain(!pain)
    console.log(pain)
  }
  const handleFiver = () => {
    setFiver(!fiver)
    data.push(fiver)
    console.log(fiver)
  }

  useEffect(() => {
    handleUsers()
  }, [setData])

  return (
    <DivCol>
      <Form>
        <SecTitle>Sintomas</SecTitle>
        <DivRow>
          <label htmlFor="cough">Dolor</label>
          <FormInput type="checkbox" id="cough" onClick={handlePain} />
        </DivRow>
        <DivRow>
          <label htmlFor="fever">Fiebre</label>
          <FormInput type="checkbox" id="fever" onClick={handleFiver} />
        </DivRow>
        <Link href="/doctors">Enviar</Link>
      </Form>
    </DivCol>
  )
}

export default Appointment
