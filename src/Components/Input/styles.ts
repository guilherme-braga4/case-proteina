import styled from 'styled-components'
import { InputProps } from './interface'

export const InputCustomizado = styled.input<InputProps>`
  color: #fff;
  height: 50px;
  font-size: 16px;
  background-color: transparent;
  border: 1.5px solid #075e54;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 16px 20px;
  width: 100%;
`
