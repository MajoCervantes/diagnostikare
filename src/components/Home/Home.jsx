import React from 'react'

//Assets
import Doctor from '../../assets/doctor.jpg'

//Styles-Components
import { DivCol, P } from '../../styledComponents/styles'

const Home = () => {
  return (
    <DivCol>
      <img src={Doctor} alt="" />
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laborum
        eligendi ab reiciendis consequatur earum ipsa aspernatur optio
        praesentium dicta saepe ipsum deserunt quo nesciunt enim aliquid, illo
        labore totam.
      </P>
    </DivCol>
  )
}

export default Home
