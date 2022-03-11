import React from 'react'

//Assets
import Doc from '../../assets/docProfile.jpg'

//Styled-Components
import {
  DivCol,
  DivRow,
  Form,
  Img,
  SecTitle,
  P,
  Link,
} from '../../styledComponents/styles'

const Doctors = () => {
  return (
    <DivCol>
      <Form>
        <SecTitle>Manuel</SecTitle>
        <DivRow>
          <Img src={Doc} alt="" />
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quibusdam, corporis autem minus doloremque sint expedita assumenda
            reprehenderit ea dolorem totam optio doloribus est quisquam porro
            natus alias dolorum illo.
          </P>
        </DivRow>
        <Link>Agendar Cita</Link>
      </Form>

      <Form>
        <SecTitle>José</SecTitle>
        <DivRow>
          <Img src={Doc} alt="" />
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quibusdam, corporis autem minus doloremque sint expedita assumenda
            reprehenderit ea dolorem totam optio doloribus est quisquam porro
            natus alias dolorum illo.
          </P>
        </DivRow>
        <Link>Agendar Cita</Link>
      </Form>
    </DivCol>
  )
}

export default Doctors
