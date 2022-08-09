import styled from 'styled-components'
import { IoMdCloseCircle, IoMdPersonAdd } from 'react-icons/io'

export const IconeFechar = styled(IoMdCloseCircle)`
  color: #273443;
  height: 50px;
  width: 40px;
  margin: 0;

  &:hover {
    transition: 0.5s;
    transform: rotate(90deg);
    color: #c70039;
  }
`

export const IconeAdicionarContato = styled(IoMdPersonAdd)`
  color: #273443;
  height: 40px;
  width: 40px;
  margin: 0;

  &:hover {
    color: #dcf8c6;
    transition: 0.5s;
    height: 35px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  padding: 5px 0px;
`

// background: linear-gradient(20deg, #dcf8c6, #ece5dd);
