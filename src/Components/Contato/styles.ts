import styled from 'styled-components'
import { AiFillDelete } from 'react-icons/ai'

export const IconeApagar = styled(AiFillDelete)`
  color: #273443;
  height: 30px;
  width: 30px;
  margin: 0;

  &:hover {
    transition: 0.3s;
    transform: rotate(360deg);
    color: #c70039;
    height: 40px;
    width: 40px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #dcf8c6;
  width: 100%;
  border-radius: 30px;
  padding: 0px 0px;

  &:hover {
    transition: 0.3s;
    margin: 0 10px;
    background-color: #e7fad8;
  }

  img {
    border-radius: 30px;
    width: 100px;
    height: 100px;
  }

  p {
    color: #000;
    font-size: 18px;
  }
`

export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0px 20px;
  justify-content: space-between;
  align-items: center;

  div {
    padding: 10px 0px;
  }
`

// background: linear-gradient(20deg, #dcf8c6, #ece5dd);
