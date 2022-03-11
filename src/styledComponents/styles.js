import styled from 'styled-components'

const Title = styled.a`
  font-size: 40px;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #56b0c5;
  }
`

const SecTitle = styled.h2`
  font-size: 25px;
  color: #56b0c5;
  margin-bottom: 10px;
`

const Nav = styled.nav`
  background-color: #bdf0dc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`
const NavLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  background-color: #bdf0dc;
  padding: 5px;

  &:hover {
    color: #56b0c5;
  }
`
const DivCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 50%;
  width: 100%;
  margin-top: 10px;
`

const DivRow = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`

const Form = styled.div`
  border: 2px solid #56b0c5;
  background-color: #dfecf0;
  color: #56b0c5;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 50%;
  height: 100%;
`

const FormInput = styled.input`
  margin: 0 10px;
  outline: none;
  border: 2px solid #56b0c5;
  padding: 2px;
  color: #56b0c5;
`

const Link = styled.a`
  background-color: #56b0c5;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  color: #fff;
  margin: 15px auto;
  font-size: 15px;
  font-weight: bold;
  transition: 0.3s all ease;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    color: #56b0c5;
    background-color: #e0e9e9;
  }
`
const Li = styled.li`
  list-style: none;
  font-size: 20px;
  margin-top: 10px;
`

const Img = styled.img`
  width: 30%;
  height: 30%;
`

const P = styled.p`
  color: #56b0c5;
  margin-left: 20px;
`

export {
  Title,
  SecTitle,
  Nav,
  NavLink,
  Link,
  DivCol,
  Form,
  DivRow,
  FormInput,
  Li,
  Img,
  P,
}
