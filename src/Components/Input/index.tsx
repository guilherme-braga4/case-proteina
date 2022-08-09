import React from 'react'
import { InputCustomizado } from './styles'
import { InputProps } from './interface'

const Input = ({
  name,
  placeholder,
  type,
  onChange
}: InputProps): JSX.Element => {
  return (
    <InputCustomizado
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input
