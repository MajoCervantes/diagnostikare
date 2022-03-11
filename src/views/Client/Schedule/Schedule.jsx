import React, { useState, useEffect } from 'react'
import axios from 'axios'

//Styled-Components
import { DivCol, Form, Li } from '../../../styledComponents/styles'

const Schedule = () => {
  const [data, setData] = useState([])

  const handleUsers = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://localhost:3000/users/1',
      })
      setData(res.data.agendadas)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleUsers()
  }, [])

  return (
    <DivCol>
      <Form>
        {data.map((c) => (
          <Li key={c.id}>{c.doctor + ' ' + c.dia}</Li>
        ))}
      </Form>
    </DivCol>
  )
}

export default Schedule
