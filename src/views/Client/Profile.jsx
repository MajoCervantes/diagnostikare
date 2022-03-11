import React, { useState, useEffect } from 'react'
import axios from 'axios'

//Styled-Components
import { Link, DivCol, DivRow, SecTitle } from '../../styledComponents/styles'

const Profile = () => {
  const [data, setData] = useState([])

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

  useEffect(() => {
    handleUsers()
  }, [])

  return (
    <DivCol>
      <SecTitle>Hola {data.nombre}!</SecTitle>
      <DivRow>
        <Link href="/schedule">Consultas agendadas</Link>
        <Link href="/appointment">Agendar Consulta</Link>
      </DivRow>
    </DivCol>
  )
}

export default Profile
